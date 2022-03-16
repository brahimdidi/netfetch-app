const api1 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const api2 = 'https://api.tvmaze.com/shows';
// styling

const navDiv = document.getElementById('nav-div');
const mediaStyle = (x) => {
  if (x.matches) { // If media query matches
    navDiv.classList.remove('w-50');
  }
};

const x = window.matchMedia('(max-width: 700px)');
mediaStyle(x); // Call listener function at run time

// fetching data

const getApi = async () => {
  const response = await fetch(api2);
  const data = await response.json();
  return data;
};

const postLikes = async () => {
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');

  await fetch(`${api1}`, {
    method: 'Post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ user: nameInput.value, score: scoreInput.value }),
  });
};











export default getApi;
