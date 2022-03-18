import { setComment, getComment } from './comments.js';

const commentBtn = document.querySelector('.comment-btn');
const list = document.querySelector('.list-group');
const listGroupItem = document.querySelector('.list-group-item');
const commentsCounter = document.querySelector('.counter'); 
const data = (id) => {
   getComment(id).then((res) => {
    let counter = 0
    res.forEach((el) => counter += 1);
    commentsCounter.innerHTML = `${counter}`;
    printComment(list, res);
  });
};
export default data;

const printComment = (list, res) => {
  list.innerHTML = '';
  res.forEach((el) => {
    let item = document.createElement('li');
    item.classList.add('list-group-item')
      // console.log(el)
    item.innerHTML = `${el.creation_date}  ${el.username} : ${el.comment}`;
    list.appendChild(item);
  });

};




// document.addEventListener('DOMContentLoaded', () => {
//     data();
//   });