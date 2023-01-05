const ftoc = function(degrees) {
  let celsius = (degrees - 32) * (5 / 9);
  return parseFloat(celsius.toFixed(1));
};  

const ctof = function(degrees) {
  let fahrenheit = degrees * (9 / 5) + 32;
  return parseFloat(fahrenheit.toFixed(1)); 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
