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
