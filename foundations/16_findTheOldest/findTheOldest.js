const findTheOldest = function (arrObj) {
  for (let i = 0; i < arrObj.length; i++) {
    if (!("yearOfDeath" in arrObj[i])) {
      arrObj[i].age = 2026 - arrObj[i].yearOfBirth;
    } else {
      arrObj[i].age = arrObj[i].yearOfDeath - arrObj[i].yearOfBirth;
    }
  }
   let namePeopleOldest = arrObj[0];
  for (let i = 1; i < arrObj.length; i++) {
    if (arrObj[i].age > namePeopleOldest.age) {
      namePeopleOldest = arrObj[i];
    }
  }
  return namePeopleOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
