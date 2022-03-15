const id = '3aKejX1g8bEFa43nKNFo';

const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/comments?item_id=item1`;

const getComment = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}
getComment();