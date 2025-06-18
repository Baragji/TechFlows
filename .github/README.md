# GitHub Actions Workflows

This directory contains automated workflows for continuous integration, security scanning, and code quality analysis.

## 🔄 Workflows Overview

### 1. CodeQL Security Analysis (`codeql.yml`)
- **Purpose**: Advanced security vulnerability detection and code quality analysis
- **Triggers**: 
  - Push to main/master/develop branches
  - Pull requests to main/master
  - Weekly schedule (Sundays at 2 AM UTC)
- **Features**:
  - JavaScript/TypeScript security analysis
  - Custom query suites (security-extended, security-and-quality)
  - Automated vulnerability reporting
  - Integration with GitHub Security tab

### 2. CI/CD Pipeline (`ci.yml`)
- **Purpose**: Continuous integration with quality checks and build testing
- **Triggers**: 
  - Push to main/master/develop branches
  - Pull requests to main/master
- **Jobs**:
  - **Quality Checks**: ESLint, TypeScript, circular dependencies, security audit
  - **Build Test**: Production build verification
  - **Dependency Review**: Automated dependency vulnerability scanning (PRs only)

### 3. Security Scanning (`security.yml`)
- **Purpose**: Multi-tool security analysis beyond CodeQL
- **Triggers**: 
  - Push to main/master branches
  - Pull requests to main/master
  - Daily schedule (3 AM UTC)
- **Tools**:
  - **Semgrep**: Pattern-based security scanning
  - **Snyk**: Dependency vulnerability scanning
  - **OSSAR**: Microsoft's open-source static analysis

## 🛠️ Setup Instructions

### 1. Enable GitHub Actions
1. Go to your repository settings
2. Navigate to "Actions" → "General"
3. Ensure "Allow all actions and reusable workflows" is selected

### 2. Configure Security Scanning (Optional)
For enhanced security scanning, add these secrets to your repository:

#### Semgrep (Free tier available)
1. Sign up at [semgrep.dev](https://semgrep.dev)
2. Get your API token
3. Add `SEMGREP_APP_TOKEN` to repository secrets

#### Snyk (Free tier available)
1. Sign up at [snyk.io](https://snyk.io)
2. Get your API token
3. Add `SNYK_TOKEN` to repository secrets

### 3. View Results
- **Security vulnerabilities**: Repository → Security tab → Code scanning alerts
- **Workflow status**: Repository → Actions tab
- **Build artifacts**: Available in successful CI runs

## 📊 What Gets Analyzed

### Code Quality
- ✅ ESLint rules and code style
- ✅ TypeScript type checking
- ✅ Circular dependency detection
- ✅ Build verification

### Security
- ✅ SQL injection vulnerabilities
- ✅ Cross-site scripting (XSS)
- ✅ Authentication bypasses
- ✅ Dependency vulnerabilities
- ✅ Secrets detection
- ✅ OWASP Top 10 issues
- ✅ React/Next.js specific security patterns

### Performance
- ✅ Bundle size analysis (via build process)
- ✅ Dependency audit

## 🔧 Customization

### Adding Custom CodeQL Queries
Edit `.github/codeql/codeql-config.yml` to:
- Add custom query suites
- Exclude specific paths
- Configure analysis scope

### Modifying CI Checks
Edit `.github/workflows/ci.yml` to:
- Add new quality checks
- Modify build process
- Configure artifact retention

### Security Tool Configuration
Edit `.github/workflows/security.yml` to:
- Add new security tools
- Modify scan frequency
- Configure severity thresholds

## 📈 Benefits

1. **Automated Security**: Continuous vulnerability detection
2. **Code Quality**: Consistent code standards enforcement
3. **Early Detection**: Issues caught before production
4. **Compliance**: Security scanning for regulatory requirements
5. **Developer Productivity**: Automated checks reduce manual review time

## 🚨 Troubleshooting

### Common Issues
1. **Build failures**: Check Node.js version compatibility
2. **Permission errors**: Ensure workflow permissions are correctly set
3. **Token issues**: Verify secrets are properly configured
4. **False positives**: Use CodeQL configuration to exclude specific patterns

### Getting Help
- Check workflow logs in the Actions tab
- Review CodeQL documentation: [codeql.github.com](https://codeql.github.com)
- GitHub Actions documentation: [docs.github.com/actions](https://docs.github.com/actions)