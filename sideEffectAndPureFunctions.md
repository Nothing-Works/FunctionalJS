# Side Effects and Pure Functions

```javascript
//recap
const compute = (x, y) => x + y;
console.log(compute(3, 4));
```

- Side Effects : is a change of system state or observable interaction with the outside world that occurs during the calculation of a result.

  - Examples

  1. A common side effect is to generate output beyond the return value:

  ```javascript
  const compute = (x, y) => {
    const r = x + y;
    console.log(r);
    return r;
  };
  ```

  2. Setters (or `set` methods) are another example of side effects; they change the object's internal state.

  ```javascript
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    changeAge(value) {
      this.age = value;
    }
  }

  const p = new Person("andy", 19);
  p.change(21);
  console.log(p);
  ```

  3. IO (input/output) operations such as file reading, database access or HTTP requests are another example of side effects.

  ```javascript
  const doRequest = () => {
    return HTTP.get("https://example.com/anything");
  };
  ```

  - Problems

  1. primary cause of complexity in software.
  2. hidden inside the function's body and not captured by its signature.
  3. may break compositional nature of functions.

- Pure Functions : produce the same output for the same inputs **and** there are no side-effects. It's a computation that it only influenced by its input and that only influences its output.

  - Examples

  1. Functions returning constant values:

  ```javascript
  const hello = () => "hello";
  ```

  2. A greeting function:

  ```javascript
  const greet = name => `Hello, ${name}`;
  ```

  3. But, a function returning the current date is **not** pure:

  ```javascript
  const today = () => new Date();
  ```

  4. Arithmetical Calculations:

  ```javascript
  const compute = (x, y) => x * y;
  ```

  5. Built-in, Javascript Array operations `slice` & `splice`: both functions do the same thing, but the former is pure while the latter is unpure.

  ```javascript
  // slice pure which means every time it returns a new array.
  const a = [0, 1, 2, 3, 4, 5];
  const a1 = a.slice(2, 5);
  console.log(a1);
  ```

  `splice` mutates its input parameter, the array is changed for good, that's an observable effect:

  ```javascript
  // splice nupure which means every time it manipulates/mutates the array directly.
  const a = [0, 1, 2, 3, 4, 5];
  a.splice(0, 1);
  a.splice(0, 1);
  a.splice(0, 1);
  console.log(a);
  ```

  - Mathematical Functions

    - Pure functions: what in mathematics is called just functions.
    - Pure functions: a way of saying "functions in mathematical sense".
    - Mathematical functions aren't series of steps that execute, thus they cannot effect other mathematical entities.

  - History
    - The design of Lisp is based on functional programming. At the same time, it allows to perform side effects.
    - Lisp does not have the notion of a procedure. Thus, there is a distinction made that those functions with these side effects are impure.
  - Benefits
    1. Pure Functions: easier to reason about
       - Pure functions don't have side effects -> They can only influence the behavior of a program through their output.
       - The output is deterministic (it can reliably be calculated using only the input values) -> Pure functions will always preserve referential.
    2. Pure Functions: explicit dependencies (transparent), self-contained.
    3. Pure Functions: may increase program's performance.

- Referential Transparency : Absence of side effects is a necessary, but not sufficient, condition for referential transparency.
  - Referential transparency means that an expression can be replaced with its value. The expression must be pure (deterministic and without side effects).
  - **Note**: A function invocation is an expression.

```javascript
//no side-effect does not mean pure function, it also needs to have the same output with the same input.
const today = () => new Date();
console.log(today);
```

- Pure Functions Programming Language : The programs of functional language are **expressions** and computation proceeds by evaluating expression while imperative languages have assignment statements.

  - The language of arithmetical expressions:

  ```javascript
  (1 + 7) * (2 + 4) * (4 + 3);
  8 * (2 + 4) * (4 + 3);
  8 * 6 * (4 + 3);
  8 * 6 * 7;
  48 * 7;
  336;
  ```

  - Evaluation: rewriting the given expression in accordance with certain rules.

    ```javascript
    const width = 1 + 7;
    const height = 2 + 4;
    const depth = 4 + 3;
    const r = width * height * depth;
    ```
