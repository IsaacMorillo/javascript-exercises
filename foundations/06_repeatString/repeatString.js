const repeatString = function (string, numRepeat) {
  let newString = "";
  if (numRepeat < 0) {
    return "ERROR";
  }
  for (let i = 1; i <= numRepeat; i++) {
    newString += string;
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
