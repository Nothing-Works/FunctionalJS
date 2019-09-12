const addOne = value => value + 1;

//map will do [1,2,3,4] -> [2,3,4,5]

const numbers = [1, 2, 3, 4];

console.log(numbers.map(addOne));

const numbers1 = [1, 2, 3, 4];
Array.prototype.andyMap = function(func) {
  const result = [];
  for (const item of this) {
    result.push(func(item));
  }
  return result;
};

console.log(numbers1.andyMap(addOne));

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
  console.table(newPeople);