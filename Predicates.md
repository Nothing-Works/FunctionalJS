# Predicates

- The term comes from mathematics. In programming it refers to a function which returns either `true` or `false`, (normally takes an input).

```javascript
const greaterThan10 = value => value > 10;
//examples
//const isEmpty = ...
//const isNull = ...
//const hasKey = ...
//const areAvailable = ...
```

- To simplify, we can imagine that predicates are like questions. Usually we name such functions as questions, e.g.

```javascript
const isNumber = value => !isNaN(value) && isFinite(value);
```

- There are some higher-order functions that take predicates as input.
