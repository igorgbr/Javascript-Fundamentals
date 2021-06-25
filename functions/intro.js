// Normal Function, explicit call
function multiplyTerms(a, b) {
  var result = a * b;
  console.log(a + ' * ' + b + ' = ', result);
}

multiplyTerms(3, 4);

// Anom func
var divideTerms = function () {
  var result = 3 / 4;
  console.log('3 / 4 = ', result);
};

divideTerms();

// Function Expression Imediatly call
(function () {
  var result = 12 / 0.75;
  console.log('12 / 0.75', result);
})();
