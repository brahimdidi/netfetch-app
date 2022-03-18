import './style.css';
import './modules/createCard.js';
import './modules/style.js';
import './modules/api.js';
import './modules/renderComment.js';
import './modules/printComment.js';
import getData, { postLikes, getLikesApi } from './modules/api';
import createCard from './modules/createCard.js'
import getMovieItem from "./modules/renderComment.js";
import getMovieItemReservation from './modules/renderReservation.js'


const main = document.querySelector('#main');


  const loading = () => {
    const loadDiv = document.createElement('div');
    const mask = document.createElement('div');
    loadDiv.classList.add('loading');
    mask.classList.add('mask');
    main.append(mask, loadDiv);
  };
  
  const removeLoding = () => {
    document.querySelector('.loading').remove();
    document.querySelector('.mask').remove();
  };

  // renderItems function start
  
if(main.innerHTML == ""){
    loading();
} else {
    removeLoding();
}



  const renderItems = async () => {
   
    const likesData = await getLikesApi();
    main.innerHTML = '';
    const moviesData = await getData();
    moviesData.forEach((item) => {
    let count = 0;
    const num = likesData.find((like) => item.id === Number(like.item_id));
    if (num !== undefined) {
    count = num.likes;
    } else {
    count = 0;
    }
    
    main.innerHTML += createCard(item, count);
    });
    
    const like = document.querySelectorAll('.like-icon');
    
    like.forEach((item) => {
    
      item.addEventListener('click', () => {
      const movieId = item.getAttribute('data-id');
    
      if (item.style.color !== 'grey') {
      item.style.color = 'grey';
      item.firstElementChild.innerHTML =
      Number(item.firstElementChild.innerHTML) + 1;
      postLikes(movieId);
      
    }

    });
    });
    // target the comment button
    const trigerModal = document.querySelectorAll(".triger-modal");
    trigerModal.forEach((btn) => {
        btn.addEventListener("click", (e) => {
           const tagetMovi = e.target.getAttribute("identifier");
           getMovieItem(tagetMovi, moviesData, e.target.id);
           const commentBtn = document.querySelector(".comment-btn");
           commentBtn.id = e.target.id;
        });
      });

      // target the reservation button
      const trigerModalReserv = document.querySelectorAll(".triger-modal-reserv");
        trigerModalReserv.forEach((btn) => {
      btn.addEventListener("click", (e) => {
         const reservTarget = e.target.getAttribute("identifier");
       getMovieItemReservation(reservTarget, moviesData, e.target.id);
       const reservationBtn = document.querySelector(".reservation-btn");
       reservationBtn.id = e.target.id;
    });
  });

    };
    
    renderItems();