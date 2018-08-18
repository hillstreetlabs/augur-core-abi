const fs = require("fs");
const path = require("path");
const abi = require("augur-core").abi;
const Augur = require("Augur.js");

const augur = new Augur();
const addresses = augur.contracts.addresses;

let es2015Content = "";
let commonjsContent = `"use strict";\nvar exports = module.exports = {};\n`;

const keys = Object.keys(abi);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  es2015Content += `export const ${key} = ${JSON.stringify(abi[key])};\n`;
  commonjsContent += `exports.${key} = ${JSON.stringify(abi[key])};\n`;
}

// Add addresses
es2015Content += `export const addresses = ${JSON.stringify(addresses)};\n`;
commonjsContent += `exports.addresses = ${JSON.stringify(addresses)};\n`;

fs.writeFileSync(path.join(__dirname, "es2015.js"), es2015Content);
fs.writeFileSync(path.join(__dirname, "commonjs.js"), commonjsContent);
