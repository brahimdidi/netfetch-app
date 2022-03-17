import getApi from "./api.js";
import getMovieItem from "./renderComment.js";
import getMovieItemReservation from "./renderReservation.js";
const main = document.querySelector("#main");

const createCard = (name, imageSrc, id) => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("movie-card", "card", "gap-2", "bg-dark");
  cardContainer.innerHTML = ` <img src="${imageSrc}"  alt="movie image" class ="movie-img p-2 bg-info">
    <div class="title-rating w-100 d-flex justify-content-around">
        <h4>${name}</h4>
        <div class="like-div">
        <span class="likes-counter">10</span>
        <i class="fa-solid fa-heart"></i>
        </div>
    </div>
    <button id="${id}" type="button" class="btn btn-outline-light triger-modal"   data-bs-toggle="modal"
    data-bs-target="#exampleModal" identifier="${name}">Comments</button>
    <button id="${id}" type="button" class="btn btn-outline-primary triger-modal-reserv" data-bs-toggle="modal"
    data-bs-target="#reservation" identifier="${name}">Reservations</button>`;

  main.appendChild(cardContainer);
};

const movieList = async () => {
  const moviesData = await getApi();
  for (const movie of moviesData) {
    createCard(movie.name, movie.image.medium, movie.id);
  }

  const trigerModal = document.querySelectorAll(".triger-modal");
  trigerModal.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tagetMovi = e.target.getAttribute("identifier");
      getMovieItem(tagetMovi, moviesData, e.target.id);
      const commentBtn = document.querySelector(".comment-btn");
      console.log(e.target.id);
      commentBtn.id = e.target.id;
    });
  });

  const trigerModalReserv = document.querySelectorAll(".triger-modal-reserv");
  trigerModalReserv.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tagetMovi = e.target.getAttribute("identifier");
      getMovieItemReservation(tagetMovi, moviesData, e.target.id);
      const reservationBtn = document.querySelector(".reservation-btn");
      console.log(e.target.id);
      reservationBtn.id = e.target.id;
    });
  });
};

movieList();
