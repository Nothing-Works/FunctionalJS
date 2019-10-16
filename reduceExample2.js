const people = [
    {id:1, name: "Donald Knuth", born: 1938 },
    {id:2, name: "Vin Cerf", born: 1943 },
    {id:3, name: "Hal Abelson", born: 1947 },
    {id:4, name: "Alan Turing", born: 1912 },
    {id:5, name: "John von Neumann", born: 1903 },
    {id:6, name: "Thomas H. Cormen", born: 1956 },
    {id:7, name: "Peter Norvig", born: 1956 },
    {id:8, name: "Jon Bentley", born: 1953 },
    {id:9, name: "Grady Booch", born: 1955 },
    {id:10, name: "Randal Bryant", born: 1952 }
  ];

 function reduceToObject(array) {
     return array.reduce((acc, cur)=> ({...acc , [cur.id] : cur}),{});
 }

    const people2 = reduceToObject(people);
    console.log(people2);
    console.log(people2[1]);