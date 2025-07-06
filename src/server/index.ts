import express from 'express';
import { findPersonBySsn } from './persons.js';
import { components } from 'types/persons';
import cors from 'cors';

type Person = components['schemas']['Person'];

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());

app.get('/persons/:ssn', (req, res) => {
  const { ssn } = req.params;

  try {
    const user: Person | undefined = findPersonBySsn(ssn);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({
        code: 404,
        message: `Person with SSN ${ssn} not found.`,
      });
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error(`Error processing request for SSN ${ssn}:`, errorMessage);
    res.status(500).json({
      code: 500,
      message: 'Internal Server Error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
