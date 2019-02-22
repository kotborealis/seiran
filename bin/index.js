#! /usr/bin/env node

const file = process.argv[2] || 0;
const input = require('fs').readFileSync(file, "utf-8");
require('../lib/index')(input);