const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (value) => {
    setInterval(function () {
      seconds = value % 60
      minutes = value / 60 % 60
      hours = value / 60 / 60 % 60
      if (value <= 0) {
        timerEl.innerHTML = `Time is over`
      } else {
        timerEl.innerHTML = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${seconds}`;
      }
      --value;
    }, 1000)
  }

};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  let inputValue = e.target.value;
  let cleanedValue = '';
  for (let i = 0; i < inputValue.length; i++) {
    if (!isNaN(parseInt(inputValue[i]))) {
      cleanedValue += inputValue[i];
    }
  }
  e.target.value = cleanedValue;
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
