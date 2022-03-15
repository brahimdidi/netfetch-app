const api1 = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi";
const api2 = 'https://api.tvmaze.com/shows';
// styling 

const navDiv = document.getElementById('nav-div')
const mediaStyle = (x) => {
    if (x.matches) { // If media query matches
      navDiv.classList.remove('w-50')
    }
    return;
  }

  
  const x = window.matchMedia("(max-width: 700px)")
  mediaStyle(x) // Call listener function at run time


// fetching data 



  const  getApi = async () => {
    const response = await fetch(api2);
    const data = await response.json();
    return data;
}



export {getApi};





