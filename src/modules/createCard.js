// import getApi from './api.js';

const createCard = (moviesData,itemLike ={}) => ` <div class="movie-card card gap-2 bg-dark" id ="${moviesData.id}">
<img  alt="movie image" class ="movie-img p-2 bg-info" src = "${moviesData.image.medium}">
<div class="title-rating w-100 d-flex justify-content-around">
    <h4 class ="text-light">${moviesData.name}</h4>
    <div class="like-div">
    <span class="likes-counter">${moviesData.name}</span>
    <p class="likes"> <i class="fas fa-heart like-icon" data-id="${moviesData.id}"> <span class="num"> ${itemLike} </span> </i>  likes </p>
    </div>
</div>
<button type="button" class="btn btn-outline-light">Comments</button>
<button type="button" class="btn btn-outline-primary">Reservations</button>
</div> `;
// export const displayMovies= async () => {
//   const moviesData = await getApi();
//   for (const movie of moviesData) {
//     createCard(movie.name, movie.image.medium,movie.id);
//   }
// };

export default createCard;


