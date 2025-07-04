import multiply from './utils.js';
import defaultProfile from './helpers.js';

console.log('index.js loaded successfully!');
console.log(`2 * 2 = ${multiply(2, 2)}`);
console.log(`defaultProfile = ${defaultProfile}`);

document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('h1');
  if (heading) {
    heading.textContent = 'Hello from JavaScript!';
  }
});
