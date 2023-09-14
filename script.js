'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal-window');
const bntsShowModalWindow = document.querySelectorAll('.show-modal-window');

function hiddenClass(value) {
  if (value === 'add') {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
  } else if (value === 'remove') {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
}

for(let i = 0; i < bntsShowModalWindow.length; i++) {
  bntsShowModalWindow[i].addEventListener('click', () => hiddenClass('remove'));
}

btnCloseModal.addEventListener('click', () => hiddenClass('add'));
overlay.addEventListener('click', () => hiddenClass('add'));

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    hiddenClass('add');
  }
}) 