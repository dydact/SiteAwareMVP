#!/usr/bin/env node

/**
 * ampx-debug.js
 * 
 * This script helps diagnose issues with running 'npx ampx playground'
 * 
 * @author [Your Name]
 * @date [Current Date]
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function runCommand(command) {
  try {
    return execSync(command, { encoding: 'utf8' });
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

console.log('Node version:', process.version);
console.log('NPM version:', runCommand('npm --version'));

console.log('\nChecking for ampx installation:');
console.log(runCommand('npm list -g ampx'));

console.log('\nChecking package.json:');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log('Dependencies:', packageJson.dependencies);
  console.log('DevDependencies:', packageJson.devDependencies);
} catch (error) {
  console.log('Error reading package.json:', error.message);
}

console.log('\nAttempting to run ampx playground:');
console.log(runCommand('npx ampx playground'));

console.log('\nNPM config:');
console.log(runCommand('npm config list'));

console.log('\nNPX version:');
console.log(runCommand('npx --version'));