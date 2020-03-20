let alot = 9007199254740991n; // Notice n at the end
console.log(alot + 1n); // 9007199254740992n
console.log(alot + 2n); // 9007199254740993n
console.log(alot + 3n); // 9007199254740994n
console.log(alot + 4n); // 9007199254740995n
console.log(alot + 5n); // 9007199254740996n

console.log(typeof("こんにちは")); // "string"
console.log(typeof('こんにちは')); // "string"
console.log(typeof(`こんにちは`)); // "string"
console.log(typeof(''));//"string"

let cat = 'Cheshire';
console.log(cat.length);//8
console.log(cat[0]);//'C'
console.log(cat[1]);//'h'

let alohomora = Symbol();
console.log(typeof(alohomora));//"symbol"

console.log(typeof({}));//"object"
console.log(typeof([]));//"object"
console.log(typeof(new Date()));//"object"
console.log(typeof(/\d+/));//"object"
console.log(typeof(Math));//"object"

let rapper = { name: 'Malicious' };
rapper.name = 'Malice'; // Dot notation
rapper['name'] = 'No Malice';// Bracket notation

console.log(rapper);

let countDwarves = function() { return 7; };
let dwarves = countDwarves;
console.log(dwarves);