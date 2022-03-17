import { setComment, getComment } from './comments.js';

const inputName = document.querySelector('.input-name');
const inputInsight = document.querySelector('.input-insight');
const commentBtn = document.querySelector('.comment-btn');
const listGroup = document.querySelector('.list-group');
const listGroupItem = document.querySelector('.list-group-item');

const refresher = () => {
  const result = getComment();
  result.then((res) => {
    printComment(list, res);
  });
};

const printComment = (listGroup, result) => {
  result.forEach((el) => {
      console.log(el)
    const item = `<li class="list-group-item">${el.creation_date} ${el.username} ${el.comment}</li>`;
  });

  listGroup.appendChild(item);
};

commentBtn.addEventListener('click', (e) => {
  e.preventDefault();
  setComment(inputName.value, inputInsight.value);
});

document.addEventListener('DOMContentLoaded', () => {
    refresher();
  });