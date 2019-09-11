Array.prototype.andyFilter
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

  const result = [];

for (let person of people) {
  if (person.born > 1945) {
    result.push(person);
  }
}

console.table(result);

const myFilter = () => {
    const result = [];

    for (let person of people) {
      if (person.born > 1945) {
        result.push(person);
      }
    }
    return result;
  };

  console.table(myFilter());

  const myFilter1 = input => {
    const result = [];

    for (let person of input) {
      if (person.born > 1945) {
        result.push(person);
      }
    }
    return result;
  };
  console.table(myFilter1(people));

  const myFilter2 = (predicate, collection) => {
    const result = [];

    for (let item of collection) {
      if (predicate(item)) {
        result.push(item);
      }
    }
    return result;
  };

  console.table(myFilter2(person => person.born > 1945, people));
  console.table(people.filter(person => person.born > 1945));

  Array.prototype.myOwnFilter = function(predicate) {
    const result = [];

    for (let item of this) {
      if (predicate(item)) {
        result.push(item);
      }
    }
    return result;
  };

  console.table(people.myOwnFilter(person => person.born > 1945));