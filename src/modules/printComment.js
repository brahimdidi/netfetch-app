import { getComment } from './comments.js';

const list = document.querySelector('.list-group');
const commentsCounter = document.querySelector('.counter');
export const counterComments = (data) => {
  let counter = 0;
  data.forEach(() => {
    counter += 1;
  });
  return counter;
};
const printComment = (list, res) => {
  list.innerHTML = '';
  res.forEach((el) => {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    item.innerHTML = `${el.creation_date}  ${el.username} : ${el.comment}`;
    list.appendChild(item);
  });
};

const data = (id) => {
  getComment(id).then((res) => {
    commentsCounter.innerHTML = `${counterComments(res)}`;
    printComment(list, res);
  });
};
export default data;
