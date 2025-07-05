---
applyTo: '**/*.ts, **/*.js'
---

# Project coding standards for TypeScript

Apply the [general coding guidelines](./general.instructions.md) to all code.

## TypeScript Guidelines

- Use TypeScript for all new code
- Follow functional programming principles where possible
- Use interfaces for data structures and type definitions
- Prefer immutable data (const, readonly)
- Use optional chaining (?.) and nullish coalescing (??) operators
- Use type guards for type narrowing
- Use enums for fixed sets of values

## JavaScript Guidelines

- Use ES6+ features (let, const, arrow functions, destructuring)
- Avoid using var
- Use template literals for string interpolation
- Use async/await for asynchronous code
- Use Promises instead of callbacks
- Use `import`/`export` syntax for modules
- Use `for...of` and `for...in` loops appropriately
- Use `Array.prototype.map`, `filter`, and `reduce` for array transformations
- Use `Object.keys`, `Object.values`, and `Object.entries` for object manipulation
- Use `console.error` for error logging
