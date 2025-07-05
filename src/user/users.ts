import { User } from './User.js';

export const USERS: User[] = [
  { id: 1, firstName: 'John', lastName: 'Doe', ssn: '111-222-3333' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', ssn: '444-555-6666' },
];

export function findUserBySsn(ssn: string): User | undefined {
  return USERS.find((user) => user.ssn === ssn);
}
