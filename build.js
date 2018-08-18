const fs = require("fs");
const path = require("path");
const abi = require("augur-core").abi;

const keys = Object.keys(abi);

let es2015Content = "";
let commonjsContent = `"use strict";\nvar exports = module.exports = {};\n`;

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  es2015Content += `export const ${key} = ${JSON.stringify(abi[key])};\n`;
  commonjsContent += `exports.${key} = ${JSON.stringify(abi[key])};\n`;
}

fs.writeFileSync(path.join(__dirname, "es2015.js"), es2015Content);
fs.writeFileSync(path.join(__dirname, "commonjs.js"), commonjsContent);
