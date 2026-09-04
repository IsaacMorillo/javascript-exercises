const sumAll = function (numStart, numEnd) {
  if (!(Number.isInteger(numStart)) || !(Number.isInteger(numEnd))) {
    return "ERROR"
  } else if (numStart < 0 || numEnd < 0){
    return "ERROR";
  }
  if (numStart > numEnd){
    let temp = numStart;
    numStart = numEnd;
    numEnd = temp;
  }
  let acum = 0;
  for (let i = numStart; i <= numEnd; i++) {
    acum += i;
  }
  return acum;
};

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll([1, 2, 3]));
