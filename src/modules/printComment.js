import { setComment, getComment } from './comments.js';
// console.log(getComment)

const commentBtn = document.querySelector('.comment-btn');
const list = document.querySelector('.list-group');
const listGroupItem = document.querySelector('.list-group-item');

const data = (id) => {
  console.log(id);
   getComment(id).then((res) => {
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
    item.innerHTML = `${el.creation_date} ${el.username} ${el.comment}`;
    list.appendChild(item);
  });

};




// document.addEventListener('DOMContentLoaded', () => {
//     data();
//   });