import getApi from "./api";
import getMovieItem from "./renderComment.js";
// import getMovieItemReservation from "./renderReservation.js";
const main = document.querySelector("#main");


const createCard = (moviesData,itemLike ={}) => ` <div class="movie-card card gap-2 bg-dark" id ="${moviesData.id}">
<img  alt="movie image" class ="movie-img p-2 bg-info" src = "${moviesData.image.medium}">
<div class="title-rating w-100 d-flex justify-content-around">
    <h4 class ="text-light">${moviesData.name}</h4>
    <div class="like-div">
    <span class="likes-counter">${moviesData.name}</span>
    <p class="likes"> <i class="fas fa-heart like-icon" data-id="${moviesData.id}"> <span class="num"> ${itemLike} </span> </i>  likes </p>
    </div>
</div>
<button id="${moviesData.id}" type="button" class="btn btn-outline-light triger-modal"   data-bs-toggle="modal"
    data-bs-target="#exampleModal" identifier="${moviesData.name}">Comments</button>
    <button id="${moviesData.id}" type="button" class="btn btn-outline-primary triger-modal-reserv" data-bs-toggle="modal"
    data-bs-target="#reservation" identifier="${moviesData.name}">Reservations</button>
</div> `;

const movieList = async () => {
  const moviesData = await getApi();
  return moviesData;
  }
  const trigerModal = document.querySelectorAll(".triger-modal");

  trigerModal.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tagetMovi = e.target.getAttribute("identifier");
      const moviesData = movieList();
      getMovieItem(tagetMovi, moviesData, e.target.id);
      const commentBtn = document.querySelector(".comment-btn");
      console.log(e.target.id);
      commentBtn.id = e.target.id;
    });
  });

  // const trigerModalReserv = document.querySelectorAll(".triger-modal-reserv");
  // trigerModalReserv.forEach((btn) => {
  //   btn.addEventListener("click", (e) => {
  //     const tagetMovi = e.target.getAttribute("identifier");
  //     getMovieItemReservation(tagetMovi, moviesData, e.target.id);
  //     const reservationBtn = document.querySelector(".reservation-btn");
  //     console.log(e.target.id);
  //     reservationBtn.id = e.target.id;
  //   });
  // });



export default createCard;


