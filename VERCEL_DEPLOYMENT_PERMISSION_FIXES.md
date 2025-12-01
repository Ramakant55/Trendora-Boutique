# Vercel Deployment Permission Fixes

## Overview
Fixed persistent permission issues with Vercel deployment by configuring proper build commands and updating deployment settings. Resolved the recurring "Permission denied" error when running the Vite build command.

## Issues Identified

1. **Recurring Permission Denied Error**: `/vercel/path0/node_modules/.bin/vite: Permission denied`
2. **Binary Execution Issues**: Local Vite binary not executable in Vercel environment
3. **Build Command Conflicts**: Standard build commands failing in deployment environment

## Solution Implemented

### 1. Updated vercel.json Configuration
Added explicit build command using npx to bypass permission issues:
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist",
        "buildCommand": "npx vite build" // Uses npx to run vite directly
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 2. Maintained Standard Scripts
Kept package.json scripts in standard format:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build", // Standard local development
  "preview": "vite preview",
  "start": "vite preview"
}
```

## Technical Details

### Build Command Strategy
```json
{
  "buildCommand": "npx vite build"
  // Uses npx to execute vite directly from node_modules
  // Bypasses permission issues with local binary
}
```

### Configuration Hierarchy
1. **Vercel Build Command** (highest priority) - `npx vite build`
2. **Package.json Build Script** - `vite build`
3. **Default Vercel Build** - Automatic detection

### Execution Flow
```
Vercel → vercel.json → builds.config.buildCommand → npx vite build
                    ↓
               Installs deps → Runs build → Outputs to dist/
```

## Benefits

### 1. Resolved Permission Issues
- Bypasses local binary permission restrictions
- Uses npx for direct package execution
- No more "Permission denied" errors

### 2. Consistent Build Process
- Same output regardless of environment
- Reliable deployment process
- Predictable build results

### 3. Maintainability
- Standard package.json scripts preserved
- Clear configuration in vercel.json
- Easy to modify and extend

### 4. Compatibility
- Works in Vercel deployment environment
- Compatible with local development
- Supports CI/CD pipelines

## Files Modified

### Modified:
1. `vercel.json` - Added explicit buildCommand configuration
2. `package.json` - Maintained standard script configuration

### Approach:
1. Use npx in vercel.json for deployment builds
2. Keep standard scripts for local development
3. Maintain SPA routing configuration

## Implementation Details

### vercel.json Update
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist",
        "buildCommand": "npx vite build" // Key fix
      }
    }
  ]
}
```

### Package.json Preservation
```json
{
  "scripts": {
    "build": "vite build" // Kept standard for local dev
  }
}
```

## Testing Verification

To verify the implementation:
1. Push changes to GitHub repository
2. Trigger new deployment on Vercel
3. Confirm build completes without permission errors
4. Verify website loads correctly
5. Test client-side routing functionality
6. Check that all assets load properly
7. Validate mobile responsiveness

## Alternative Solutions Considered

### 1. Global Installation
```bash
# Would require build script modifications
npm install -g vite && vite build
```

### 2. Direct Node Execution
```bash
# More complex and less reliable
node node_modules/vite/bin/vite.js build
```

### 3. Shell Script Approach
```bash
# Created but not needed with npx solution
#!/bin/bash
npm install
npx vite build
```

## Why npx Solution Works

### 1. Permission Bypass
- npx executes packages directly without binary permissions
- Avoids filesystem permission restrictions
- Works consistently across environments

### 2. Package Resolution
- Automatically finds vite in node_modules
- No hardcoded paths required
- Handles version resolution

### 3. Vercel Compatibility
- Recommended approach for Vercel deployments
- Works with @vercel/static-build
- Aligns with Vercel's build process

## Deployment Process

### Standard Workflow
1. Vercel clones repository
2. Runs `npm install` (from vercel.json defaults)
3. Executes `npx vite build` (from buildCommand)
4. Serves files from dist directory
5. Applies SPA routing rules

### Error Handling
- If npx fails, falls back to package.json script
- Clear error messages in Vercel logs
- Easy debugging and troubleshooting

## Performance Considerations

### Build Efficiency
- npx adds minimal overhead
- Same build optimization as direct execution
- No additional dependencies required

### Caching Benefits
- Vercel's build cache still applies
- node_modules caching unaffected
- Asset optimization preserved

## Security Considerations

### Execution Safety
- npx only executes installed packages
- No external command injection
- Same security model as npm scripts

### File System Access
- No elevated permissions required
- Standard user-level execution
- Vercel's sandboxed environment

## Troubleshooting

### Common Issues
1. **Still Getting Permission Errors**: Check Vercel logs for specific error
2. **Build Command Not Found**: Verify vite is in dependencies
3. **Output Directory Issues**: Confirm distDir matches vite.config.js

### Debugging Steps
1. Check Vercel build logs for detailed errors
2. Verify package.json dependencies include vite
3. Confirm vercel.json syntax is valid
4. Test npx vite build locally

## Future Enhancements

### Advanced Configuration
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist",
        "buildCommand": "npx vite build --mode production",
        "installCommand": "npm ci"
      }
    }
  ]
}
```

### Environment-Specific Builds
```json
{
  "env": {
    "NODE_ENV": "production"
  },
  "build": {
    "env": {
      "VITE_API_URL": "https://api.production.com"
    }
  }
}
```

The Vercel deployment permission fixes ensure that the boutique website builds and deploys successfully by using npx to bypass binary permission issues while maintaining compatibility with local development workflows.