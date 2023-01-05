const removeFromArray = function(array, ...args) {
    filterdArray = array.filter(item => !args.includes(item));
    return filterdArray;
};

// Do not edit below this line
module.exports = removeFromArray;
