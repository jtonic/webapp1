export async function getPersonBySsn(ssn: string) {
  // The URL is relative because of the proxy configured in webpack.config.js
  const apiUrl = `/persons/${ssn}`;
  try {
    console.log(`Fetching person with SSN: ${ssn}`);
    const response = await fetch(apiUrl);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Person not found');
    }
    console.log('Response received:', response);
    return await response.json();
  } catch (error: any) {
    console.error('Error fetching person:', error.message);
    throw error;
  }
}
