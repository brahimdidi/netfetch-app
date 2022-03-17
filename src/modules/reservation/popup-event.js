const popupReserve = document.querySelector(".reserve-popup");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  const { id } = button;
  const idName = id.split("-")[0]; // project-1
  if (idName === "project") projectButtons.push(button);
});
const openModal = (id) => {
  modal.style.display = "block";
  const project = projects.find((project) => project.id === id);
  modalTitle.textContent = project.name;
  modalImage.src = project.featured_image;
  let li = "";
  project.technologies.forEach((tech) => {
    li += `<li class="tags">${tech}</li>`;
  });
  techList.innerHTML = li;
};
projectButtons.forEach((button) => {
  const { id } = button;
  button.addEventListener("click", () => openModal(id));
});
