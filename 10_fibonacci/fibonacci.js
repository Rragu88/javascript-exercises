const fibonacci = function(count) {
    // if count is negative return OOPS
    if (count < 0) return "OOPS";
    // if count is equal to 0 return 0 
    if (count === 0) return 0;
    // set a equal to 0
    let a = 0;
    // set b equal to 1
    let b = 1;
    // loop as long as i is less than count
    for (let i = 1; i < count; i++) {
        // set temp equal to b
        const temp = b;
        // set b equal to a plus b
        b = a + b;
        // set a equal to temp;
        a = temp;
    }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;
