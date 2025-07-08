import multiply from 'utils.js';
import defaultProfile from 'helpers.ts';

describe('simple modules', () => {
  it('using multiply from another module', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  it('importing exported elements from a typescript module', () => {
    expect(defaultProfile.name).toBe('Tony');
  });
});
