const inputName = document.querySelector('.input-name');
const inputInsight = document.querySelector('.input-insight');
const commentBtn = document.querySelector('.comment-btn');
const list = document.querySelector('.list-group');
const listGroupItem = document.querySelector('.list-group-item');


const idMian = '3aKejX1g8bEFa43nKNFo';

const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${idMian}/comments`;

const getComment = async ( id) => {
  const getUrl = `${url}?item_id=${id}`;
    const res = await fetch(getUrl);
    const data = await res.json();
    return data;
}


const setComment = async (id, username, comment) => {
  const body = {};

  body['item_id'] = id;
  body['username'] = username;
  body['comment'] = comment;
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};


  export { getComment, setComment};