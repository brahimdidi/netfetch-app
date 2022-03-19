import { getReservation } from './reservation.js';

export const counterReservation = (data) => {
  let counterReserv = 0;
  data.forEach(() => {
    counterReserv += 1;
  });
  return counterReserv;
};

const list = document.querySelector('.output-reservation');
const reservationCounter = document.querySelector('.counter-reservation');

const printReservation = (list, res) => {
  list.innerHTML = '';
  res.forEach((el) => {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    item.innerHTML = ` ${el.date_start} - ${el.date_end} ${el.username}`;
    list.appendChild(item);
  });
};
const dataReservation = (id) => {
  getReservation(id).then((res) => {
    reservationCounter.innerHTML = `${counterReservation(res)}`;
    printReservation(list, res);
  });
};
export default dataReservation;
