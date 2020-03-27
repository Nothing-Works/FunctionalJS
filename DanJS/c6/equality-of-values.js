console.log(1===1);
console.log(1==='1');
console.log(1=='1');
console.log(Object.is(1,1));

console.log(Object.is(2,2));//true
console.log(Object.is({},{}));//false

let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;

console.log(Object.is(dwarves, continents));// false
console.log(Object.is(continents, worldWonders));// false
console.log(Object.is(worldWonders, dwarves));// true

let banana = {};
let cherry = banana;
let chocolate = cherry;
cherry = {};

console.log(Object.is(banana, cherry));//false
console.log(Object.is(cherry, chocolate));//false
console.log(Object.is(chocolate, banana));//true

function strictEquals(a, b) {
    if (Number.isNaN(a) || Number.isNaN(b))
        return false;

    if ((Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0)))
        return true;

    return Object.is(a, b);
}

console.log([[]] == '');//true
console.log([1] == true);//true
console.log([0] == false);//true