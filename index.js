const { parse, toString } = require('@estilles/expression-parser');
const args = require('process');

let arg = process.argv.slice(2).toString();

if (arg.length !== 1) {
  console.log('Invalid no. of arguments');
  process.exit(1);
}

console.log(toString(parse(arg)));
