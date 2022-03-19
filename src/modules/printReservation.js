import { getReservation } from './reservation.js';

const list = document.querySelector('.output-reservation');
const reservationCounter = document.querySelector('.counter-reservation');

const dataReservation = (id) => {
  getReservation(id).then((res) => {
    let counterReserv = 0;
    res.forEach((el) => counterReserv += 1);
    reservationCounter.innerHTML = `${counterReserv}`;
    printReservation(list, res);
  });
};
export default dataReservation;

const printReservation = (list, res) => {
  list.innerHTML = '';
  res.forEach((el) => {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    item.innerHTML = ` ${el.date_start} - ${el.date_end} ${el.username}`;
    list.appendChild(item);
  });
};