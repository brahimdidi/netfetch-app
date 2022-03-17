import { getReservation } from "./reservation.js";
// console.log(getReservation)

const reservationBtn = document.querySelector(".reservation-btn");
const list = document.querySelector(".output-reservation");

const dataReservation = (id) => {
  console.log(id);
  getReservation(id).then((res) => {
    console.log(res);
    printReservation(list, res);
  });
};
export default dataReservation;

const printReservation = (list, res) => {
  list.innerHTML = "";
  res.forEach((el) => {
    let item = document.createElement("li");
    item.classList.add("list-group-item");
    // console.log(el)
    item.innerHTML = `${el.username} ${el.date_start} ${el.date_end}`;
    list.appendChild(item);
  });
};
