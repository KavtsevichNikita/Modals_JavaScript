'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModals = document.querySelectorAll('.show-modal')

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    };


for (let i=0; i < btnsOpenModals.length; i++) {

    btnsOpenModals[i].addEventListener('click', openModal );
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keyup', (event) => {
    if(event.key === 'Escape') {
        if(!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
})