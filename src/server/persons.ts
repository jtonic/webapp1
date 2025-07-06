import { components } from 'types/persons';

type Person = components['schemas']['Person'];

const MOCK_PERSONS: Person[] = [
  { id: 1, ssn: '123-45-678', firstName: 'John', lastName: 'Doe' },
  { id: 2, ssn: '987-65-432', firstName: 'Jane', lastName: 'Smith' },
  { id: 3, ssn: '111-22-333', firstName: 'Peter', lastName: 'Jones' },
];

export const findPersonBySsn = (ssn: string): Person | undefined => {
  return MOCK_PERSONS.find((person) => person.ssn === ssn);
};
