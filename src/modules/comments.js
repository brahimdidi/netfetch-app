const id = '3aKejX1g8bEFa43nKNFo';

const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/comments?item_id=item1`;

const getComment = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

const setComment = async (comment, username, creation_date) => {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        comment,
        username,
        creation_date
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };
  
  export { getComment, setComment};