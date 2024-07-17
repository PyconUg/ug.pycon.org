const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'vercel.template.json');
const outputPath = path.join(__dirname, 'vercel.json');

const template = fs.readFileSync(templatePath, 'utf8');

const filledTemplate = template
  .replace(/\$\{PYCON_2023_URL\}/g, process.env.PYCON_2023_URL)
  .replace(/\$\{PYCON_2024_URL\}/g, process.env.PYCON_2024_URL)
  .replace(/\$\{PYCON_MAIN_URL\}/g, process.env.PYCON_MAIN_URL);

fs.writeFileSync(outputPath, filledTemplate);

console.log('vercel.json has been generated.');