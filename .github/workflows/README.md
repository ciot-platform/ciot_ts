# GitHub Actions Workflow

This directory contains the GitHub Actions workflow to automate the release process for the ciot-ts project with multi-environment support.

## Workflow

### `auto-release.yml`
Automatic workflow to create releases based on the target branch.

**When it runs:**
- Push to `main` branch → Stable Release 🚀
- Push to `release` branch → Beta Release 🧪
- Push to `develop` branch → Alpha Release ⚡
- Manual execution via GitHub UI

**Release Types:**

| Branch | Type | Suffix | Pre-release | Description |
|--------|------|--------|-------------|-------------|
| `main` | Stable | (none) | ❌ | Stable version for production |
| `release` | Beta | `-beta.N` | ✅ | Feature-complete version for testing |
| `develop` | Alpha | `-alpha.TIMESTAMP` | ✅ | Unstable version for development |

**Versioning examples:**
- Stable: `v0.5.0`
- Beta: `v0.5.0-beta.1`, `v0.5.0-beta.2`
- Alpha: `v0.5.0-alpha.20251124123045`

**What it does:**
- Automatically detects release type based on branch
- Reads version from `package.json`
- Adds appropriate suffixes (alpha/beta)
- Checks if tag already exists
- Compiles the project (TypeScript)
- Runs tests (if they exist)
- Creates npm package
- Generates automatic changelog
- Creates GitHub release with attached files

## How to Use

### Automatic Release by Branch

#### To create an Alpha Release (develop):
```bash
# Work on the develop branch
git checkout develop

# Make your changes
git add .
git commit -m "feat: new feature"

# Push to develop - creates alpha release automatically
git push origin develop
# Result: v0.5.0-alpha.20251124123045
```

#### To create a Beta Release (release):
```bash
# Merge develop to release
git checkout release
git merge develop

# Push to release - creates beta release automatically
git push origin release
# Result: v0.5.0-beta.1
```

#### To create a Stable Release (main):
```bash
# Update version in package.json
npm version minor  # or patch/major

# Merge release to main
git checkout main
git merge release

# Push to main - creates stable release automatically
git push origin main
# Result: v0.5.0
```

### Manual Execution

You can also execute manually:
1. Go to the "Actions" tab on GitHub
2. Select "Auto Release"
3. Click "Run workflow"
4. Choose the target branch (main/release/develop)
5. Optionally specify a custom version

## Recommended Workflow

```
develop (alpha)  →  release (beta)  →  main (stable)
    ↓                    ↓                  ↓
v0.5.0-alpha.X     v0.5.0-beta.1        v0.5.0
```

### Day-to-Day Workflow:

1. **Active development** → work on `develop`
   - Each push generates an alpha release
   - Ideal for quick internal testing
   - Unstable versions with timestamp

2. **Release preparation** → merge to `release`
   - Generates numbered beta releases
   - Ideal for QA and acceptance testing
   - Feature-complete but may have bugs

3. **Production** → merge to `main`
   - Generates stable release
   - Requires updated version in package.json
   - Ready for production

## Required Configuration

The workflow uses `GITHUB_TOKEN` which is automatically provided by GitHub Actions. No additional configuration is needed.

## Files Included in Release

- `ciot-ts-*.tgz` - npm package
- `ciot-ts-dist-*.tar.gz` - Compressed compiled code
- Automatic changelog based on commits
- Badges indicating release type

## Troubleshooting

### Error: "Tag already exists"
- The version in `package.json` has already been released
- For stable: update version before merging to main
- For beta/alpha: suffix is added automatically

### Build fails
- Check if all dependencies are in `package.json`
- Run `npm run build` locally to verify errors

### Release was not created
- Check if you pushed to one of the correct branches (main/release/develop)
- See logs in Actions to identify the error

### Incorrect version
- Alpha: uses automatic timestamp
- Beta: automatically increments based on existing tags
- Stable: uses exactly what's in package.json
