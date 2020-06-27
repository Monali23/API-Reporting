const fs = require('fs');
const handlebars = require('handlebars');

const inFile = './weather.hbs';
const outFile = './weather.html';

const data = require('./weather.json');

const source = fs.readFileSync(inFile, 'utf8');
const template = handlebars.compile(source, { strict: true });
const result = template(data);

console.log(result);

fs.writeFileSync(outFile, result);
console.log(`File written to ${outFile}`);