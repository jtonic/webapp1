import axios from 'axios';

export async function getPersonBySsn(ssn: string) {
  // The URL is relative because of the proxy configured in webpack.config.js
  const apiUrl = `/persons/${ssn}`;
  try {
    console.log(`Fetching person with SSN: ${ssn}`);
    const response = await axios.get(apiUrl);
    console.log('Response received:', response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      'Error fetching person:',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
}
