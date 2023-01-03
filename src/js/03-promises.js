import Notiflix from 'notiflix';
// console.log(Notiflix);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const form = document.querySelector('.form');

form.addEventListener('submit', evt => {
  evt.preventDefault();
});
