const { parse, toString } = require('@estilles/expression-parser')
const args = require('process');

let arg = process.argv.slice(2).toString();

console.log(toString(parse(arg)));
