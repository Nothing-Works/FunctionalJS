console.log(typeof(undefined));

let mimsy =  null;
//console.log(mimsy.mood); //Type Error!

let person = undefined;
// console.log(person.mood);//TypeError!

let bandersnatch;
console.log(bandersnatch); // undefined

// console.log(jabberwocky);// ReferenceError!
let jabberwocky;

console.log(typeof(null));//'object' (a lie)


console.log(typeof(true));//'boolean'
console.log(typeof(false));//'boolean'

console.log(0.1 + 0.2 === 0.3);//false
console.log(0.1 + 0.2 === 0.30000000000000004);//true

console.log(Number.MAX_SAFE_INTEGER);     // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 3); // 9007199254740994
console.log(Number.MAX_SAFE_INTEGER + 4); // 9007199254740996
console.log(Number.MAX_SAFE_INTEGER + 5); // 9007199254740996