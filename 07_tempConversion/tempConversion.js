function formatNumber(number) {
  if (Number.isInteger(number)) return number;
  else return +number.toFixed(1);
}

const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  return formatNumber(celsius);
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return formatNumber(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
