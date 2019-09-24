const reduce1 = (func, initialValue, collection) => {
    let stored = initialValue;
    for (let item of collection) {
      stored = func(stored, item);
    }
    return stored;
  };

  const array = [1, 2, 3, 4, 5];

  console.log(reduce1((acc, current) => acc + current, 0, array));
  console.log(array.reduce((acc, current) => acc + current));


const objs = [{ number: 10 }, { number: 20 }, { number: 30 }];
const r = objs.reduce((acc, cur) => acc + cur.number, 0);
console.log(r);


const array1 = [[0, 1], [2, 3], [4, 5]];
const a = array1.reduce((acc, cur) => [...acc, ...cur]);
console.table(a);


const array2 = [[1, 2, 3], [2, 3, 3, 3, 3], [3, 4], [5], [1, 1, 1, 1]];
const b = array2.reduce((acc, cur) => (acc.length > cur.length ? acc : cur));
console.table(b);