import { setComment } from './comments.js';
import data from './printComment.js';

const getMovieItem = (showName, arr, id) => {
  const element = arr.find((el) => el.name === showName);

  const modalTitle = document.querySelector('.modal-title');
  modalTitle.textContent = `${element.name}`;

  const cardImage = document.querySelector('.card-img-top');
  cardImage.src = `${element.image.original}`;

  const summary = document.querySelector('.summary');
  summary.innerHTML = `${element.summary}`;

  // Reservation popup Modal
  const resevationModalTitle = document.querySelector('.reservation-title');
  resevationModalTitle.textContent = `${element.name}`;
  // const resevationCard = document.querySelector('reservation-card');
  const resevationCardImage = document.querySelector('.reservation-img');
  resevationCardImage.src = `${element.image.original}`;

  const resevationMummary = document.querySelector('.reservation-summary');
  resevationMummary.innerHTML = `${element.summary}`;

  const commentBtn = document.querySelector('.comment-btn');

  commentBtn.addEventListener('click', (e) => {
    const inputName = document.querySelector('.input-name');
    const inputInsight = document.querySelector('.input-insight');
    setComment(e.target.id, inputName.value, inputInsight.value).then(() => {
      data(id);
      inputName.value = '';
      inputInsight.value = '';
    });
  });

  data(id);
};

export default getMovieItem;