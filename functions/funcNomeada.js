function findBiggestFraction(a, b) {
  return a > b ? a : b;
}

var firstFraction = 3 / 4;
var secondFraction = 5 / 7;

var resultComparation = findBiggestFraction(firstFraction, secondFraction);

console.log('First Fraction: ' + firstFraction);
console.log('Second Fraction: ' + secondFraction);

console.log('The biggest fraction is: ' + resultComparation);
