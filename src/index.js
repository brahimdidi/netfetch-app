import './style.css';
import './modules/createCard.js';
import './modules/api.js';
import './modules/likeCounter'
import getData, { postLikes, getLikesApi } from './modules/likeCounter';
import createCard from './modules/createCard.js'







  const loading = () => {
    const main = document.querySelector('#main');
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
  
  const renderItems = async () => {
    const main = document.querySelector('#main');
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
    
      if (item.style.color !== 'pink') {
      item.style.color = 'pink';
      item.firstElementChild.innerHTML =
      Number(item.firstElementChild.innerHTML) + 1;
      postLikes(movieId);
    }
    });
    });
    };
    
    renderItems();