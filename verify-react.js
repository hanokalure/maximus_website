#!/usr/bin/env node

// Simple verification script for React project
const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying React Project Setup...\n');

// Check package.json
const packagePath = path.join(__dirname, 'package.json');
if (fs.existsSync(packagePath)) {
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    console.log('✅ package.json found');
    console.log(`   - React version: ${pkg.dependencies.react || 'Not found'}`);
    console.log(`   - React DOM version: ${pkg.dependencies['react-dom'] || 'Not found'}`);
    console.log(`   - React Scripts version: ${pkg.dependencies['react-scripts'] || 'Not found'}`);
    
    // Check for any Expo dependencies
    const allDeps = {...(pkg.dependencies || {}), ...(pkg.devDependencies || {})};
    const expoDeps = Object.keys(allDeps).filter(dep => 
        dep.includes('expo') || dep.includes('react-native')
    );
    
    if (expoDeps.length === 0) {
        console.log('✅ No Expo or React Native dependencies found');
    } else {
        console.log('⚠️  Found potential Expo/React Native dependencies:', expoDeps);
    }
} else {
    console.log('❌ package.json not found');
}

// Check src structure
const srcPath = path.join(__dirname, 'src');
if (fs.existsSync(srcPath)) {
    console.log('\n✅ src/ directory found');
    
    // Check for main files
    const mainFiles = ['index.js', 'App.js', 'App.css'];
    mainFiles.forEach(file => {
        const filePath = path.join(srcPath, file);
        if (fs.existsSync(filePath)) {
            console.log(`   ✅ ${file} exists`);
        } else {
            console.log(`   ❌ ${file} missing`);
        }
    });
    
    // Check components
    const componentsPath = path.join(srcPath, 'components');
    if (fs.existsSync(componentsPath)) {
        const components = fs.readdirSync(componentsPath);
        console.log(`   ✅ components/ directory with ${components.length} files`);
        components.forEach(comp => {
            if (comp.endsWith('.js')) {
                console.log(`      - ${comp}`);
            }
        });
    }
} else {
    console.log('❌ src/ directory not found');
}

// Check public structure  
const publicPath = path.join(__dirname, 'public');
if (fs.existsSync(publicPath)) {
    console.log('\n✅ public/ directory found');
    
    const indexPath = path.join(publicPath, 'index.html');
    if (fs.existsSync(indexPath)) {
        console.log('   ✅ index.html exists');
    } else {
        console.log('   ❌ index.html missing');
    }
}

// Check build directory (if exists)
const buildPath = path.join(__dirname, 'build');
if (fs.existsSync(buildPath)) {
    console.log('\n✅ build/ directory found (production build available)');
} else {
    console.log('\n💡 No build/ directory (run `npm run build` to create production build)');
}

console.log('\n🎉 React Project Verification Complete!');
console.log('\nTo run the project:');
console.log('1. npm install (if needed)');
console.log('2. npm start');
console.log('3. Open http://localhost:3000');
