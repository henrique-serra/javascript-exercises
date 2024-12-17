const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
	return array.reduce((sum, currentValue) => sum + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((product, currentValue) => product * currentValue);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	let result = 1;
  for (; number > 0; number--) {
    result *= number;
  }
  return result;
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
