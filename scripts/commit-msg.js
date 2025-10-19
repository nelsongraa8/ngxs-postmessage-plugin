#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

const commitFile = process.argv[2];
const msg = fs.readFileSync(commitFile, 'utf-8').trim();

console.log('📝 Checking if the commit message follows Commitlint rules...');
try {
  execSync(`npx commitlint --edit "${commitFile}"`, { stdio: 'pipe' });
  console.log('✅ Commit message follows Commitlint rules.');
} catch {
  console.error('❌ Commit message does not follow Commitlint rules.');
  process.exit(1);
}

console.log('📝 Checking commit message length...');
if (msg.length < 15) {
  console.warn(`❌ Commit message too short (${msg.length} characters). Please be more descriptive.`);
}
if (msg.length > 200) {
  console.warn(`❌ Commit message too long (${msg.length} characters). Please summarize it.`);
}

console.log('✅ Commit message successfully verified.');

process.exit(0);
