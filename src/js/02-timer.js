import flatpickr from 'flatpickr';
// console.log(flatpickr);

// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
  },
};

const fp = flatpickr(input, options);

// помістити в колбек і буде стягувати по інпуту інфу
const expectedDate = new Date(input.value);
console.log(expectedDate);
