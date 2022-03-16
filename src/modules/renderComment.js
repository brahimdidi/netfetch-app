import getApi from './api.js';
// import { getComment } from './comments.js';

const getMovieItem = async () => {
  const data = await getApi();
  console.log(data);

  const modalTitle = document.querySelector('.modal-title');
  modalTitle.textContent = 'How are you';
  const card = document.querySelector('.card');
  const cardImage = (document.querySelector('.card-img-top').src =
    './assets/cool.jpg');
  //   cardImage.classList.add('card-img-top');
  //   cardImage.src = './garden-g3d47ba2a6_1920.jpg';

  //   card.appendChild(cardImage);

  const summary = document.querySelector('.summary');
  summary.textContent = 'I am not here';

  //   for (let el of data) {
  //     const modal = document.querySelector('.modal-section');

  //     modal.innerHTML = `
  //  <div
  //  class="modal fade"
  //  id="exampleModal"
  //  tabindex="-1"
  //  aria-labelledby="exampleModalLabel"
  //  aria-hidden="true"
  // >
  //  <div class="modal-dialog ">
  //    <div class="modal-content bg-dark">
  //      <div class="modal-header">
  //        <h5 class="modal-title text-light" id="exampleModalLabel">${el.name}</h5>
  //        <button
  //          type="button"
  //          class="btn-close"
  //          data-bs-dismiss="modal"
  //          aria-label="Close"
  //        ></button>
  //      </div>
  //      <div class="modal-body">
  //        <div class="card mb-3 bg-dark">
  //          <img
  //            src="${el.id.name}"
  //            class="card-img-top"
  //            alt="..."
  //          />
  //          <p class="summary">${el.summary}</p>
  //          <div class="card-body">
  //            <div class="row">
  //              <div class="col-sm-4">
  //                <h5 class="card-title text-light">Add comment</h5>
  //                <form class="mb-3">
  //                  <input
  //                    type="text"
  //                    class="form-control mb-3"
  //                    id="your-name"
  //                    placeholder="Your name"
  //                  />
  //                  <textarea
  //                    class="form-control mb-3"
  //                    id="your-insights"
  //                    rows="3"
  //                    placeholder="Your insights"
  //                  ></textarea>
  //                  <button type="button" class="btn btn-secondary mb-3 text-dark add-comment">
  //                    Comment
  //                  </button>
  //                </form>
  //              </div>
  //              <div class="col-sm-8">
  //                <div class="card output-comments" style="width: 18rem">
  //                  <div class="card-header d-flex justify-content-between">
  //                    <h5 class="card-title">Comments</h5>
  //                    <p class="counter">0</p>
  //                  </div>
  //                  <ul class="list-group list-group-flush output">
  //                    <li class="list-group-item">An item</li>
  //                  </ul>
  //                </div>
  //              </div>
  //            </div>
  //          </div>
  //        </div>
  //      </div>
  //      <div class="modal-footer">
  //        <button
  //          type="button"
  //          class="btn btn-secondary"
  //          data-bs-dismiss="modal"
  //        >
  //          Close
  //        </button>
  //      </div>
  //    </div>
  //  </div>
  // </div>
  // `;
  //   }
};

getMovieItem();
