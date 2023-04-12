const fs = require('fs');
const file = './dist/index.js';
const raw = fs.readFileSync(file, 'utf-8');
const lines = raw.split('\n');
const deleted = lines.splice(10, 2);
lines.splice(32, 1, '}', ...deleted)
fs.writeFileSync(file, lines.join('\n'));