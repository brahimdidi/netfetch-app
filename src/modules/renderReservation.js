import dataReservation from "./printReservation";
import { setReservation } from "./reservation.js";
const getMovieItemReservation = (showName, arr, id) => {
  const element = arr.find((el) => el.name == showName);

  // Reservation popup Modal
  const resevationModalTitle = document.querySelector(".reservation-title");
  resevationModalTitle.textContent = `${element.name}`;
  const resevationCard = document.querySelector("reservation-card");
  const resevationCardImage = (document.querySelector(
    ".reservation-img"
  ).src = `${element.image.original}`);

  const resevationMummary = document.querySelector(".reservation-summary");
  resevationMummary.innerHTML = `${element.summary}`;

  const reservationBtn = document.querySelector(".reservation-btn");

  reservationBtn.addEventListener("click", (e) => {
    const yourName = document.querySelector("#your-reservation-name");
    const startDate = document.querySelector("#start-date");
    const endDate = document.querySelector("#end-date");
    setReservation(
      e.target.id,
      yourName.value,
      startDate.value,
      endDate.value
    ).then(() => {
      dataReservation(id);
      yourName.value = "";
      startDate.value = "";
      endDate.value = "";
    });
  });

  dataReservation(id);
};

export default getMovieItemReservation;