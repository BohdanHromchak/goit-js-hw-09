import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// console.log(flatpickr);

import Notiflix from 'notiflix';
// console.log(Notiflix);

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', onStart);
startBtn.setAttribute('disabled', 'disabled');

// initialization flatpickr

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] > new Date()) {
      startBtn.removeAttribute('disabled');
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

const fp = flatpickr(input, options);

// conver function

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// callback after click event

function onStart() {
  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }

  const countdown = setInterval(() => {
    const currentDate = new Date();
    const selectedDate = new Date(input.value);
    const difDate = selectedDate - currentDate;
    const difDateObject = convertMs(selectedDate - currentDate);

    if (difDate > 0) {
      days.textContent = addLeadingZero(difDateObject.days);
      hours.textContent = addLeadingZero(difDateObject.hours);
      minutes.textContent = addLeadingZero(difDateObject.minutes);
      seconds.textContent = addLeadingZero(difDateObject.seconds);
    } else {
      clearInterval(countdown);
      Notiflix.Notify.success('Time is up!');
    }
  }, 1000);
}
