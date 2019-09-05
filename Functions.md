# Functions

- What are Functions?

  - Functions are **Objects**

  ```javascript
  const person = {
    name: "andy",
    age: 30
  };
  function displayName() {
    return this.name;
  }

  console.log(displayName.call(person));
  ```

  - Functions are unit of computations. They take **input** and produce **output**.

- How to define a function.

  - Defining a function means that we associate a name with a computation description.

- Function Declaration

```javascript
function compute(x, y) {
  return x + y;
}

const sum = compute(1, 2);
console.log(sum);
```

- `x` and `y` are input parameters.
- `x + y` is the output.

- Functions Input & Output: Parameters & Return

```javascript
function compute() {}
console.log(compute());
```

- Functions Invocation

```javascript
function compute(x, y) {}
const a = compute();
const b = new compute();
const c = compute.call(null, 1, 2, 3);
const d = compute.apply(null, [1]);
```

- Functions can be invoked with more or fewer parameters than declared its definition. The extra parameters are ignored while the missing ones are set to `undefined`.

- Hoisting
  - Functions (and variables defined with `var`) are put into the memory during the compilation phase. This way these functions can be executed from anywhere, even in places before the actual definition.
- Function Expression
  - 1.Anonymous Functions Expressions
    - arrow functions (shorter, no `this`)
  - 2.Named Functions Expressions (recursive reason)
  - 3.IIFE Immediately Invoked Function Expression

```javascript
//Anonymous
const compute = function(x, y) {
  return x + y;
};
//arrow functions
const func = (x, y) => {
  return x + y;
};
// arrow functions with implict `return`
const func1 = (x, y) => x + y;
console.log(func(1, 2));
console.log(compute(1, 2));

//named
const compute = function calculate(x, y) {
  return x + y;
};

//IIFE
const sum = (function(x, y) {
  return x + y;
})(1, 2);
console.log(sum);
```
