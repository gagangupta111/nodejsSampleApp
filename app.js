const EventEmitter = require('events');

const functionR = require('./function');
const path    = require('path');
const fss     = require('fs');
const os     = require('os');
const fsjs     = require('./funcexample');

console.log(__filename);
console.log(__dirname);

var pathObj = path.parse(__filename);

print(pathObj);

functionR.logging(" logging variable message!");
print(functionR.add(5, 6));
print(functionR.addNaive(5, 11));

print("====================")
const files = fss.readdirSync('./');
print(files);

const asyncFiles = fss.readdir('./', function(err, readFiles){
  if(err) print('err: ' + err)
  else print('readFiles: ' + readFiles)
})

print("====================")
var freemem = os.freemem();
var totalmem = os.totalmem();

print('freemem: ' + freemem);
print('totalmem: ' + totalmem);


print("====================")
function print(message){
  console.log(message);
}

print("====================")

print(global);
print("====================")

print(global.global);

print("====================")
print(global.customVariable);

print("====================")
print(fsjs);

print("====================")
print(process);

