# Higher-Order Functions

- Higher order functions are functions that

1.  can be passed as input to other functions
    **OR**
2.  can be returned from other functions as output

# Example

1. passing functions as input

```javascript
const profile = fn => {
  console.log(`started : ${Date()}`);
  const result = fn();
  console.log(`computing : ${result}`);
  console.log(`ended : ${Date()}`);
};

const compute = () => 2;

profile(compute);
```

2. Returning functions as output (passing function as input)

```javascript
const profile = fn => {
  return (...args) => {
    console.log(`started : ${Date()}`);
    const result = fn(...args);
    console.log(`computing : ${result}`);
    console.log(`ended : ${Date()}`);
  };
};

const compute = (x, y) => x + y;

profile(compute)(2, 3);
```

3. Returning function as output (only)

```javascript
const isLargerThan = value => input => input > value;

const isLargerThan10 = isLargerThan(10);
const result = isLargerThan10(4);
```

**Abstraction hides details. Abstraction provides a higher level (or more abstract) of thinking**

4. Sorting numbers

```javascript
const array = [2, 3, 5, 7, 8, 4, 5, 6, 11, 111, 1, 22];
const numericalOrder = (a, b) => a - b;
console.log(array.sort(numericalOrder));
```

**The `Array.sort` method allows to abstract away the method of comparing individual elements**
