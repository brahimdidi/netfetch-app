const getMovieItem = (showName, arr) => {
  const element = arr.find((el) => el.name == showName);

  const modalTitle = document.querySelector(".modal-title");
  modalTitle.textContent = `${element.name}`;
  const card = document.querySelector(".card");
  const cardImage = (document.querySelector(
    ".card-img-top"
  ).src = `${element.image.medium}`);

  const summary = document.querySelector(".summary");
  summary.innerHTML = `${element.summary}`;

  // Reservation popup Modal
  const resevationModalTitle = document.querySelector(".reservation-title");
  resevationModalTitle.textContent = `${element.name}`;
  const resevationCard = document.querySelector("reservation-card");
  const resevationCardImage = (document.querySelector(
    ".reservation-img"
  ).src = `${element.image.medium}`);

  const resevationSummary = document.querySelector(".reservation-summary");
  resevationSummary.innerHTML = `${element.summary}`;
};

export default getMovieItem;
