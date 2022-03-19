const moviesCounter = (name, arrLength) => {
  const h1 = document.createElement('h1');
  h1.textContent = `${name} (${arrLength})`;
  document.body.appendChild(h1);
  return h1.textContent;
};

export default moviesCounter;