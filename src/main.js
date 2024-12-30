const openS = document.querySelector('.menu-open');
const modalopen = document.querySelector('.menu-modal');
const closemodal = document.querySelector('.menu-close');

openS.addEventListener('click', toggleModal);
closemodal.addEventListener('click', toggleModal);

function toggleModal() {
  modalopen.classList.toggle('is-open');
}
// document.addEventListener('click', bodyClose);
// function bodyClose(e) {
//   e.preventDefault();
//   if (!modalopen.contains(e.target)) {
//     toggleModal();
//   }
// }
