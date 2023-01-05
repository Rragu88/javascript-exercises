const sumAll = function(arg1, arg2) {
    let sum = 0;
    
    if((arg1 < 0 || arg2 < 0) || (typeof(arg1) != 'number' || typeof(arg2) != 'number')) {
        return "ERROR";
    }

    if (arg2 > arg1) {
        for (let i=arg1; i <= arg2; i++) {
            sum += i;
        }
    } else {
        for (let i=arg2; i <= arg1; i++) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
