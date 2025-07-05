---
applyTo: '**/*.test.ts, **/*.test.js'
---

# Project coding standards for testing

## Testing Guidelines

- Use only Jest and TypeScript for new tests,
- Create new tests in the `test` directory,
- Create the test file in the same directory as the source code being tested,
- For assertions using Jest's built-in `expect` function
- Use `describe` and `it` blocks for test organization
- Use `beforeEach` and `afterEach` for setup and teardown
- Use `expect` for assertions from Jest not frmo Chai
- Use `jest.mock` for mocking dependencies
- Use `jest.spyOn` for spying on functions
- Use `jest.fn` for creating mock functions
- Use `jest.clearAllMocks` to reset mocks between tests
