---
applyTo: '**'
---

# Project general coding for web development standards

## Naming Conventions

- Use PascalCase for component names, interfaces, and type aliases
- Use camelCase for variables, functions, and methods
- Prefix private class members with underscore (\_)
- Use ALL_CAPS for constants

## Error Handling

- Use try/catch blocks for async operations
- Always log errors with contextual information

## New code

- Use TypeScript instead of JavaScript for all new code

## Code structure

- Organize code into modules and components,
- When a set of modules is related and in the same directory, use an `index.ts` file to re-export them,
- Production code goes in `src/` directory
- Tests go in `test/` directory
- Keep related code together and separate unrelated code
- Use index.ts files to re-export modules from a directory
