const palindromes = function (string) {
  string = string.toLowerCase();
  let arrString = string.split("");
  let size = arrString.length;
  let arrPalindrome = [];
  for (let i = 0; i < size; i++) {
    if (!(arrString[i] >= "a" && arrString[i] <= "z")) {
      let transformNumber = Number.parseInt(arrString[i]);
      if (Number.isInteger(transformNumber)) {
        arrPalindrome.push(arrString[i]);
      }
      continue;
    }
    arrPalindrome.push(arrString[i]);
  }
  let arrInverse = [];
  for (let i = arrPalindrome.length - 1; i >= 0; i--) {
    arrInverse.push(arrPalindrome[i]);
  }
  for (let i = 0; i < arrPalindrome.length - 1; i++) {
    if (arrPalindrome[i] != arrInverse[i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;

console.log(palindromes("ce4nec"));
