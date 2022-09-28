const fs = require('fs');

const pug = require('pug');

const compiledFunction = pug.compileFile('./src/greet-template.pug');

// Throws Error
const html = compiledFunction({
  name : 'Neos21',
  greet: 'Hello World'
});

fs.mkdirSync('./dist');
fs.writeFileSync('./dist/index.html', html, 'utf-8');
