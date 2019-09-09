// pass function as input
const profile = fn => {
    console.log(`started : ${Date()}`);
    const result = fn();
    console.log(`computing : ${result}`);
    console.log(`ended : ${Date()}`);
  };

  const compute = () => 2;

  profile(compute);

  // return function as output
  const profile1 = fn => {
    return (...args) => {
      console.log(`started : ${Date()}`);
      const result = fn(...args);
      console.log(`computing : ${result}`);
      console.log(`ended : ${Date()}`);
    };
  };

  const compute1 = (x, y) => x + y;

  profile1(compute1)(22, 22);

  // return function only
const isLargerThan = value => input => input > value;

const isLargerThan10 = isLargerThan(10);
const result = isLargerThan10(14);
console.log(result);

//sorting array
const array = [2, 3, 5, 7, 8, 4, 5, 6, 11, 111, 1, 22];
const numericalOrder = (a, b) => a - b;
console.log(array.sort(numericalOrder));