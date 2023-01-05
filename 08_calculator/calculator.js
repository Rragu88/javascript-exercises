let answer = 0;
const add = function(num1, num2) {
  answer = num1 + num2;
  return answer;
};

const subtract = function(num1, num2) {
	answer = num1 - num2;
  return answer; 
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};


const power = function(num1, num2) {
	answer = num1 ** num2;
  return answer;
};

const factorial = function(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
