#!/usr/bin/env node

/**
 * GitHub Actions Workflow Verification Script
 * Verifies that all required workflow files are present and properly configured
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const WORKFLOWS_DIR = '.github/workflows';
const REQUIRED_WORKFLOWS = [
  'codeql.yml',
  'ci.yml', 
  'security.yml',
  'badges.yml'
];

// eslint-disable-next-line no-console
console.log('🔍 Verifying GitHub Actions workflows...\n');

// Check if workflows directory exists
if (!fs.existsSync(WORKFLOWS_DIR)) {
  // eslint-disable-next-line no-console
  console.error('❌ .github/workflows directory not found!');
  process.exit(1);
}

let allValid = true;

// Check each required workflow
REQUIRED_WORKFLOWS.forEach(workflowFile => {
  const workflowPath = path.join(WORKFLOWS_DIR, workflowFile);
  
  if (!fs.existsSync(workflowPath)) {
    // eslint-disable-next-line no-console
    console.error(`❌ Missing workflow: ${workflowFile}`);
    allValid = false;
    return;
  }

  try {
    const content = fs.readFileSync(workflowPath, 'utf8');
    const workflow = yaml.load(content);
    
    // Basic validation
    if (!workflow.name) {
      // eslint-disable-next-line no-console
      console.error(`❌ ${workflowFile}: Missing 'name' field`);
      allValid = false;
      return;
    }
    
    if (!workflow.on) {
      // eslint-disable-next-line no-console
      console.error(`❌ ${workflowFile}: Missing 'on' triggers`);
      allValid = false;
      return;
    }
    
    if (!workflow.jobs) {
      // eslint-disable-next-line no-console
      console.error(`❌ ${workflowFile}: Missing 'jobs' section`);
      allValid = false;
      return;
    }
    
    // eslint-disable-next-line no-console
    console.log(`✅ ${workflowFile}: Valid (${workflow.name})`);
    
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`❌ ${workflowFile}: Invalid YAML - ${error.message}`);
    allValid = false;
  }
});

// Check CodeQL config
const codeqlConfigPath = '.github/codeql/codeql-config.yml';
if (fs.existsSync(codeqlConfigPath)) {
  try {
    const content = fs.readFileSync(codeqlConfigPath, 'utf8');
    yaml.load(content);
    // eslint-disable-next-line no-console
    console.log('✅ CodeQL configuration: Valid');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`❌ CodeQL config: Invalid YAML - ${error.message}`);
    allValid = false;
  }
} else {
  // eslint-disable-next-line no-console
  console.error('❌ CodeQL configuration file not found');
  allValid = false;
}

// Check security policy
if (fs.existsSync('SECURITY.md')) {
  // eslint-disable-next-line no-console
  console.log('✅ Security policy: Present');
} else {
  // eslint-disable-next-line no-console
  console.error('❌ SECURITY.md not found');
  allValid = false;
}

// eslint-disable-next-line no-console
console.log('\n' + '='.repeat(50));

if (allValid) {
  // eslint-disable-next-line no-console
  console.log('🎉 All workflows are properly configured!');
  // eslint-disable-next-line no-console
  console.log('🚀 GitHub Actions are ready to run.');
  // eslint-disable-next-line no-console
  console.log('📊 Check results at: https://github.com/Baragji/TechFlows/actions');
  process.exit(0);
} else {
  // eslint-disable-next-line no-console
  console.log('❌ Some workflows have issues. Please fix them before deployment.');
  process.exit(1);
}