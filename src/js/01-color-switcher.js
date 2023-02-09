const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
const TIME_DELAY = 1000;
let intervalId = null;

setDisabled(refs.stopBtn);

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

function onStartClick(e) {
  const sibling = e.target.nextElementSibling;
  setDisabled(e.target);
  removeDisabled(sibling);
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, TIME_DELAY);
}
function onStopClick(e) {
  const sibling = e.target.previousElementSibling;
  setDisabled(e.target);
  removeDisabled(sibling);
  clearInterval(intervalId);
}

function setDisabled(elem) {
  elem.setAttribute('disabled', !elem.disabled);
}
function removeDisabled(elem) {
  elem.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
