const getTheTitles = function(arrObj) {
    arrAns = [];
    for (let i=0; i < arrObj.length ; i++){
       let title = arrObj[i]['title'] ;
       arrAns.push(title);
    }
    return arrAns;
};

// Do not edit below this line
module.exports = getTheTitles;
