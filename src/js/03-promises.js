import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delayEl: document.querySelector('[name="delay"]'),
  stepEl: document.querySelector('[name="step"]'),
  amountEl: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  let delayPromise = Number(refs.delayEl.value);

  for (let i = 1; i <= refs.amountEl.value; i += 1) {
    createPromise(i, delayPromise);
    delayPromise += Number(refs.stepEl.value);
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notify.success(`Fullfilled promise ${position} in ${delay}ms`));
      } else {
        reject(Notify.failure(`Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  });
}
