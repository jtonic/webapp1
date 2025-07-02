import { expect } from 'chai';

describe('Simple math', () => {
  it('should assert that 1 + 1 equals 2', () => {
    expect(1 + 1).to.equal(2);
  });

  it('expect "1" to be of type string', () => {
    expect(1).to.be.a('number');
  });
});
