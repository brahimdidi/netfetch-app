export const getLikesApi = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/SCyxl5cnkMvgsvMmSHIH/likes',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  return response.json();
};
const getData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  return data;
};

export const postLikes = async (item) => {
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/SCyxl5cnkMvgsvMmSHIH/likes',
    {
      method: 'POST',
      body: JSON.stringify({ item_id: item }),
      headers: {
        'Content-type': 'application/json; Charset=UTF-8',
      },
    },
  );
};

export default getData;
