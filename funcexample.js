
const fs = require('fs');

const files = fs.readdirSync('./');

var customVariable = "customVariable_Value";

console.log(files);

module.exports.customVariable = customVariable;