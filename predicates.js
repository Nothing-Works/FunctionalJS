const greaterThan10 = value => value > 10;

console.log(greaterThan10(11));
console.log(greaterThan10(9));

const isNumber = value => !isNaN(value) && isFinite(value);

console.log(isNumber('s'));
console.log(isNumber(1));