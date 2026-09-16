const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
};

const multiply = function (arr) {
    let mult = 1;
  for (let i = 0; i < arr.length; i++) {
    mult *= arr[i];
  }
  return mult;
};

const power = function (a,b) {
  return a**b;
};

const factorial = function (num) {
  if(num <= 1){
    return 1;
  } 
  let result = 1;
  for (let i= 1; i <= num; i++){
    result *= i;
  }
  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
