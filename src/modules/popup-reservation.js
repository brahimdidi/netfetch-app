import getApi from "./api.js";

const reservation = document.querySelector("#reservation");
reservation.className = "modal fade";
reservation.ariaLabelledby = "exampleModalLabel";
reservation.ariaHidden = "true";

const popupTemplate = () => {
  reservation.innerHTML = `<div class="modal fade" id="reservation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content bg-secondary">
      <div class="modal-header">
        <h5 class="modal-title reservation-title" id="exampleModalLabel">Reservation</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="card mb-3 bg-dark reservation-card">
          <img class="card-img-top reservation-img" alt="..." />
          <p class=" reservation-summary"></p>
          <div class="card-body">
            <div class="row reservation-input">
              <div class="col-sm-12">
                <h5 class="card-title">Add a Reservation</h5>
                <form class="mb-3">
                  <input type="text" class="form-control mb-3" id="your-name" placeholder="Your name" />
                  <input type="date" class="form-control mb-3" id="your-date" min="2022-03-17" max="2100-12-31" />
                  <input type="time" class="form-control mb-3" id="your-time" value="18:00:00" min="18:00:00" max="22:30:00"  />

                  <button type="button" class="btn btn-secondary mb-3" id="reserve">
                    Reserve
                  </button>
                </form>
              </div>
              <div class="col-sm-12">
                <div class="card output-comments bg-secondary" >
                  <div class="card-header d-flex justify-content-between">
                    <h5 class="card-title">Reservations</h5>
                    <p class="counter">0</p>
                  </div>
                  <ul class="list-group list-group-flush output">
                    <li class="list-group-item">An item</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>`;
};

const x = async () => {
  // const movies = await getApi();
  document.addEventListener("click", (event) => {
    if (event.target.id == "popup-reserve") {
      popupTemplate();
    }
  });
};

export default x;
