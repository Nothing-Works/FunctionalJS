let arr = [212, 8, 506]
let str = 'hello'

console.log(arr[0]);
console.log(str[0]);

arr[0] = 420;
str[0] = 'j';

console.log(arr);
console.log(str);

let fifty = 50;
fifty.shades = 'gray'

let pet = 'Narwhal'
pet = 'The Kraken'
console.log(pet);//? guess? my guess is 'The Kraken'

// 'war' = 'peace'; // Nope.

function double(x) {
    x = x * 2;
}

let money = 10;
double(money);
console.log(money); // 10