#!/usr/bin/env node

const commons = require('../index');

let input = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => {
	input += chunk;
});
process.stdin.on('end', () => {
	process.stdout.write(commons(input));
});
