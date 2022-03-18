const idMian = "3aKejX1g8bEFa43nKNFo";

const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${idMian}/reservations`;

const getReservation = async (id) => {
  const getUrl = `${url}?item_id=${id}`;
  const res = await fetch(getUrl);
  const data = await res.json();
  return data;
};

const setReservation = async (id, yourName, startDate, endDate) => {
  const body = {};

  body["item_id"] = id;
  body["username"] = yourName;
  body["date_start"] = startDate;
  body["date_end"] = endDate;
  console.log(body);
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export { getReservation, setReservation };