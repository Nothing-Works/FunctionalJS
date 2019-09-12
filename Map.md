# Map

- Mapping is a process of transforming an input array by applying a function to each element of that array and producing a new array that contains results of that function invocation.

- JavaScript `map()` is a higher-order function defined as a method on the Array object that applies a given function to each element in the calling array.

```javascript
const addOne = value => value + 1;
//map will do [1,2,3,4] -> [2,3,4,5]

const numbers = [1, 2, 3, 4];

console.log(number.map(addOne));
```

- Build it by ourself

```javascript
const numbers1 = [1, 2, 3, 4];
Array.prototype.andyMap = function(func) {
  const result = [];
  for (const item of this) {
    result.push(func(item));
  }
  return result;
};

console.log(numbers1.andyMap(addOne));
```

- Notes
  - Loops introduce complexity:
    1. There are few types of loops in Javascript.
    2. Iteration is explicit: variables for storing the current state of iteration.

# Examples

- Transforming an array of objects

```javascript
const people = [
  { name: "Donald Knuth", born: 1938 },
  { name: "Vin Cerf", born: 1943 },
  { name: "Hal Abelson", born: 1947 },
  { name: "Alan Turing", born: 1912 },
  { name: "John von Neumann", born: 1903 },
  { name: "Thomas H. Cormen", born: 1956 },
  { name: "Peter Norvig", born: 1956 },
  { name: "Jon Bentley", born: 1953 },
  { name: "Grady Booch", born: 1955 },
  { name: "Randal Bryant", born: 1952 }
];

const newPeople = people.map(({ name, born }) => ({ name, age: 2019 - born }));
```
