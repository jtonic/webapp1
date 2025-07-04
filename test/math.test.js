describe('Simple math', () => {
  it('should assert that 1 + 1 equals 2', () => {
    expect(1 + 1).toBe(2);
  });

  it('expect "1" to be of type number', () => {
    expect(typeof 1 === 'number').toBe(true);
  });
});
