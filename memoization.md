# Memoization

- Memoization is an optimization technique (and not a pattern).
- Memoization consists of storing function result instead of recomputing it each time. It is a cache/ for function invocations.
- Since function results are cached, they can be returned immediately when given function is invoked with the same argument : we remember the result of that function for given arguments.

# Example

```javascript
//without cache
const sum = (a, b) => a + b;
console.log(sum(1, 2));
console.log(sum(1, 2));
//with cache
const cache = {
  "1 2": 3
};
```

# Complexity

- Memoization requires additional memory as we store function result in the cache. This introduces some additional complexity to our program.
- It makes sense to use memoization for function that are computationally expensive, i.e. functions that take substantial time to compute their result.

**A Function can only be memoized if it is referentially transparent**
