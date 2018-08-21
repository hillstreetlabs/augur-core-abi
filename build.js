const fs = require("fs");
const path = require("path");
const abi = require("augur-core").abi;
const Augur = require("Augur.js");

const augur = new Augur();
const addresses = augur.contracts.addresses;

let es2015Content = "";
let commonjsContent = `"use strict";\nvar exports = module.exports = {};\n`;
let typingsContent = `declare module "augur-core-abi" {\n`;

const keys = Object.keys(abi);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  es2015Content += `export const ${key} = ${JSON.stringify(abi[key])};\n`;
  commonjsContent += `exports.${key} = ${JSON.stringify(abi[key])};\n`;
  typingsContent += `  export const ${key}: any[];\n`;
}

// Add addresses
es2015Content += `export const addresses = ${JSON.stringify(addresses)};\n`;
commonjsContent += `exports.addresses = ${JSON.stringify(addresses)};\n`;
typingsContent += `  export const addresses: { [networkId: string]: { [contractName: string]: string } };\n`;

typingsContent += `}\n`;

fs.writeFileSync(path.join(__dirname, "es2015.js"), es2015Content);
fs.writeFileSync(path.join(__dirname, "commonjs.js"), commonjsContent);
fs.writeFileSync(path.join(__dirname, "index.d.ts"), typingsContent);
