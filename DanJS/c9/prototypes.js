let human = {
    teeth: 32
}

let gwen = {
    age: 19
}

let gwen1 = {
    _proto_: human,
    age: 19
}

let gwen2 = {
    __proto__: human,
    age: 19
}
console.log(gwen.teeth);
console.log(gwen1.teeth);
console.log(gwen2.teeth);

let human1 = {
    teeth: 32
}

let gwen11 = {
    // "Look for other properties here"
    __proto__: human1,
    age: 19
}

console.log(gwen11.teeth); // 32

console.log('test');
let h = {
    teeth: 32
}

let g = {
    __proto__: h,
    age: 19
}

console.log(h.age); // undefined
console.log(g.age); // 19

console.log(h.teeth); // 32
console.log(g.teeth); // 32

console.log(h.tail); // undefined
console.log(g.tail); // undefined

console.log(g.hasOwnProperty('age'));
console.log(g.hasOwnProperty('teeth'));

function assignment() {
    let human = {
        teeth: 32
    }

    let gwen = {
        __proto__: human,
    }

    console.log(human.teeth); // 32
    console.log(gwen.teeth); // 32

    gwen.teeth = 31;

    console.log(human.teeth); // 32
    console.log(gwen.teeth); // 31
}

assignment()

function pineapple() {
    let pizza = {};
    pizza.__proto__.taste = 'pineapple'
console.log(pizza.taste);
}
pineapple()