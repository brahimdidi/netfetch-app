import { setComment, getComment } from './comments.js';
// console.log(getComment)
const inputName = document.querySelector('.input-name');
const inputInsight = document.querySelector('.input-insight');
const commentBtn = document.querySelector('.comment-btn');
const list = document.querySelector('.list-group');
const listGroupItem = document.querySelector('.list-group-item');

const data = () => {
  let result = getComment();
  result.then((res) => {
    printComment(list, res);
  });
};


const printComment = (list, res) => {
  res.forEach((el) => {
    let item = document.createElement('li');
    item.classList.add('list-group-item')
      // console.log(el)
    item.innerHTML = `${el.creation_date} ${el.username} ${el.comment}`;
    list.appendChild(item);
  });

};


commentBtn.addEventListener('click', (e) => {
  e.preventDefault();
  setComment(inputName.value, inputInsight.value);
});

document.addEventListener('DOMContentLoaded', () => {
    data();
  });