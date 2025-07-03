import multiply from 'utils.js';
import { expect } from 'chai';

describe('simple modules', () => {
  it('using multiply from another module', () => {
    expect(multiply(2, 2)).to.equal(4);
  });
});
