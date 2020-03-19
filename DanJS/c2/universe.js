//primitive values.
console.log(2);
console.log('hello');
console.log(undefined);
//non-primitive values.
console.log({});
console.log([]);
console.log(x=>x*2);
//expressions
console.log(2+2); //4
//typeof
console.log(typeof(2));//'number'
console.log(typeof('hello'));//'string'
console.log(typeof(undefined));//'undefined'
console.log(typeof({}));//'object'
console.log(typeof {});//'object'
console.log(typeof([]));//'object'
console.log(typeof []);//'object'
console.log(typeof(x=>x*2));//'function'
//this will not work.
// console.log(typeof x => x * 2);//'function'
//only nine types
//undefined,null,Number,String,Boolean,Symbol,BigInts,Objects,Functions
//types
console.log(typeof([]));//"object"
console.log(typeof(new Date()));//"object"
console.log(typeof(/(hello|goodbye)/));//"object"