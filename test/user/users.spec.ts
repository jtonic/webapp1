import { findUserBySsn, USERS, User } from 'user';

describe('findUserBySsn', () => {
  it('should find a user by their SSN', () => {
    const ssnToFind = '111-222-3333';
    const expectedUser: User | undefined = USERS.find(
      (u) => u.ssn === ssnToFind,
    );
    const foundUser = findUserBySsn(ssnToFind);
    expect(foundUser).toEqual(expectedUser);
    expect(foundUser?.firstName).toBe('John');
  });

  it('should return undefined if user is not found', () => {
    const ssnToFind = '000-00-0000';
    const foundUser = findUserBySsn(ssnToFind);
    expect(foundUser).toBeUndefined();
  });
});
