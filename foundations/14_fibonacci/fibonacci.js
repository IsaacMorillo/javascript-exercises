const fibonacci = function(num) {
    num = Number.parseInt(num);
    let numPrev= 0;
    let numAct = 1;
    if(num < 0){
        return 'OOPS'
    }
    if(num == 1){
        return 1;
    }

    if (num == 0){
        return 0;
    }
    for (let i=1; i < num ; i++){
        let nextNum = numPrev + numAct;
        numPrev = numAct;
        numAct = nextNum;
    }

    return numAct;
};

// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci(10));