const EventEmitter = require('events');

const logging = require('./function');
const path    = require('path');
const fss     = require('fs');
const os     = require('os');

console.log(__filename);
console.log(__dirname);

var pathObj = path.parse(__filename);

print(pathObj);

logging(" logging variable message!");

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
