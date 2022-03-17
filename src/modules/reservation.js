const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const id = "MPJxzt8c8f2bH7iyT4Jo";

const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/reservations/`;

const postReservationsData = async (showId, username, startDate, endDate) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset= UTF-8",
    },
    body: JSON.stringify({
      item_id: showId,
      username: username,
      date_start: startDate,
      date_end: endDate,
    }),
  });
  console.log(response);
};

const getReservationsData = async (movieId) => {
  const response = await fetch(`${url}?item_id=${movieId}`).catch((err) => err);
  return response.json();
};
