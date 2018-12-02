
var obj = {

    name : "Gagan Gupta"

};

var stringObj = JSON.stringify(obj);

console.log('typeof obj', typeof obj);
console.log('obj', obj);

console.log('typeof stringObj', typeof stringObj);
console.log('stringObj', stringObj);

console.log("===============");

var personString = '{"name": "Gagan Gupta", "age": 29}';
var person = JSON.parse(personString);

console.log("typeof person", typeof person);
console.log("person", person);


