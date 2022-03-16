import getApi from './api.js';

const main = document.querySelector('#main');
const createCard = (name, imageSrc,id) => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('movie-card', 'card', 'gap-2', 'bg-dark');
  cardContainer.innerHTML = ` <img src="${imageSrc}"  alt="movie image" class ="movie-img p-2 bg-info">
    <div class="title-rating w-100 d-flex justify-content-around">
        <h4>${name}</h4>
        <div class="like-div">
        <span id="like-number">10</span>
        <i id="${id}" class="fa-solid fa-heart"></i>
        </div>
    </div>
    <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Comments</button>
    <button type="button" class="btn btn-outline-primary">Reservations</button>`;
  
  main.appendChild(cardContainer);
};

const movieList = async () => {
  const moviesData = await getApi();
  for (const movie of moviesData) {
    createCard(movie.name, movie.image.medium,movie.id);
  }
};

movieList();
