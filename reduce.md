# Reduce methods - The Ultimate Abstraction

## Reducing (or Folding) is a process of recombining an input array into a single value by applying a function to each element of that array.

## The `reduce()` function is pretty general, It can be also used to implement both `map` and `filter`

- Home-Grown Reduce (Adding numbers as an example)

```javascript
const reduce = (func, initialValue, collection) => {
  let stored = initialValue;
  for (let item of collection) {
    stored = func(stored, item);
  }
  return stored;
};

const array = [1, 2, 3, 4, 5];

console.log(reduce((acc, current) => acc + current, 0, array));
console.log(array.reduce((acc, current) => acc + current));
```

- Adding numbers extracted from objects

```javascript
const objs = [{ number: 10 }, { number: 20 }, { number: 30 }];
const r = objs.reduce((acc, cur) => acc + cur.number, 0);
```

- Flattening Arrays

```javascript
const array = [[0, 1], [2, 3], [4, 5]];
const a = array.reduce((acc, cur) => [...acc, ...cur]);
```

- Longest Array (find the longest array from array of arrays)

```javascript
const array2 = [[1, 2, 3], [2, 3, 3, 3, 3], [3, 4], [5], [1, 1, 1, 1]];
const b = array2.reduce((acc, cur) => (acc.length > cur.length ? acc : cur));
```
