

function logging(message){

  console.log('function.js' + message);

}

function addNaive(a, b){

  return a + b;

}

module.exports.add = (a, b) => {
  return a + b;
};

module.exports.logging = logging;
module.exports.addNaive = addNaive;
