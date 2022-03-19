const createCard = (moviesData, itemLike = {}) => ` <div class="movie-card card gap-2 bg-dark" id ="${moviesData.id}">
<img  alt="movie image" class ="movie-img p-2 bg-danger" src = "${moviesData.image.medium}">
<div class="title-rating w-100 d-flex justify-content-around">
    <h4 class ="text-light ps-2 movie-title">${moviesData.name}</h4>
    <div class="like-div">
    
    <p class="likes ms-2""> <i class="fas fa-heart like-icon fa-1x" data-id="${moviesData.id}"> 
    <span class="num"> ${itemLike} </span> </i>  likes </p>
    <span class="likes-counter">${moviesData.name}</span>
    </div>
</div>
<button id="${moviesData.id}" type="button" class="btn btn-outline-light triger-modal"   data-bs-toggle="modal"
    data-bs-target="#exampleModal" identifier="${moviesData.name}">Comments</button>
    <button id="${moviesData.id}" type="button" class="btn btn-outline-primary triger-modal-reserv" data-bs-toggle="modal"
    data-bs-target="#reservation" identifier="${moviesData.name}">Reservations</button>
</div> `;

export default createCard;
