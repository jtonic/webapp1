console.log('index.js loaded successfully!');
document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('h1');
  if (heading) {
    heading.textContent = 'Hello from JavaScript!';
  }
});
