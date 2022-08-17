'use strict';

const showModal = document.querySelectorAll(`.show-modal`);
const overLay = document.querySelector(`.overlay`);
const closeModal = document.querySelector(`.close-modal`);

const hideModal = function () {
  document.querySelector(`.modal`).classList.add(`hidden`);
  overLay.classList.add(`hidden`);
};

const displayModal = function () {
  document.querySelector(`.modal`).classList.remove(`hidden`);
  overLay.classList.remove(`hidden`);
};

showModal.forEach(modal => modal.addEventListener(`click`, displayModal));

closeModal.addEventListener(`click`, hideModal);

overLay.addEventListener(`click`, hideModal);

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !overLay.classList.contains(`hidden`)) hideModal();
});
