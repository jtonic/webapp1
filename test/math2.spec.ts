import { expect } from '@jest/globals';
import multiply from 'utils.js';

describe('TypeScript math', () => {
  it('should assert that 2 * 2 equals 4', () => {
    expect(2 * 2).toBe(4);
  });
});

describe('JS modules in TS', () => {
  it('import a simple js module element in TS', () => {
    const result = multiply(2, 2);
    expect(result).toBe(4);
  });
});
