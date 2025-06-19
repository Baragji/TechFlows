#!/usr/bin/env node

/**
 * Script to update package.json with testing scripts
 * This script safely adds or updates the scripts section in package.json
 */

const fs = require('fs')
const path = require('path')

const PACKAGE_JSON_PATH = path.join(process.cwd(), 'package.json')

// Test scripts to add
const TEST_SCRIPTS = {
  'test': 'jest',
  'test:watch': 'jest --watch',
  'test:coverage': 'jest --coverage',
  'test:a11y': 'jest --testPathPatterns=a11y',
  'validate:html': 'html-validate "src/**/*.{tsx,jsx}"'
}

function updatePackageJson() {
  try {
    // Read existing package.json
    const packageJsonContent = fs.readFileSync(PACKAGE_JSON_PATH, 'utf8')
    const packageJson = JSON.parse(packageJsonContent)
    
    // Initialize scripts object if it doesn't exist
    if (!packageJson.scripts) {
      packageJson.scripts = {}
    }
    
    // Add or update test scripts
    const scriptsAdded = []
    const scriptsUpdated = []
    
    Object.entries(TEST_SCRIPTS).forEach(([scriptName, scriptCommand]) => {
      if (packageJson.scripts[scriptName]) {
        if (packageJson.scripts[scriptName] !== scriptCommand) {
          console.log(`📝 Opdaterer eksisterende script: ${scriptName}`)
          packageJson.scripts[scriptName] = scriptCommand
          scriptsUpdated.push(scriptName)
        }
      } else {
        console.log(`➕ Tilføjer nyt script: ${scriptName}`)
        packageJson.scripts[scriptName] = scriptCommand
        scriptsAdded.push(scriptName)
      }
    })
    
    // Write updated package.json
    fs.writeFileSync(
      PACKAGE_JSON_PATH, 
      `${JSON.stringify(packageJson, null, 2)  }\n`
    )
    
    console.log('\n✅ Package.json opdateret succesfuldt!')
    
    if (scriptsAdded.length > 0) {
      console.log(`📦 Nye scripts tilføjet: ${scriptsAdded.join(', ')}`)
    }
    
    if (scriptsUpdated.length > 0) {
      console.log(`🔄 Scripts opdateret: ${scriptsUpdated.join(', ')}`)
    }
    
    console.log('\n📋 Tilgængelige test kommandoer:')
    Object.entries(TEST_SCRIPTS).forEach(([name, command]) => {
      console.log(`  npm run ${name} - ${getScriptDescription(name)}`)
    })
    
  } catch (error) {
    console.error('❌ Fejl ved opdatering af package.json:', error.message)
    process.exit(1)
  }
}

function getScriptDescription(scriptName) {
  const descriptions = {
    'test': 'Kør alle tests',
    'test:watch': 'Kør tests i watch mode',
    'test:coverage': 'Kør tests med coverage rapport',
    'test:a11y': 'Kør accessibility tests',
    'validate:html': 'Validér HTML struktur'
  }
  return descriptions[scriptName] || 'Test script'
}

// Run the update
if (require.main === module) {
  updatePackageJson()
}

module.exports = { updatePackageJson, TEST_SCRIPTS }