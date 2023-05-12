import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker')
const startBtn = document.querySelector('[data-start]')
const day = document.querySelector('[data-days]')
const hour = document.querySelector('[data-hours]')
const min = document.querySelector('[data-minutes]')
const sec = document.querySelector('[data-seconds]')
let intervalIdTimer
// console.log(inputEl)
startBtn.addEventListener('click', ()=>{runTimer()})


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      Notify.failure('Please choose a date in the future');
      // window.alert('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};
  

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

function padStart(value) {
  return value.toString().padStart(2, '0');
}

  function runTimer() {
    intervalIdTimer = setInterval(()=>{
    const newDate = new Date(inputEl.value)
    const date = new Date()
        const difDate = newDate.getTime() - date.getTime()
        
    if (difDate<=0){
        startBtn.disabled = false 
        clearInterval(intervalIdTimer)
        day.textContent = '00'
        min.textContent = '00'
        sec.textContent = '00'
        hour.textContent = '00'
        return
        }
        startBtn.disabled = true

        const { days, hours, minutes, seconds } = convertMs(difDate)
        
    day.textContent = padStart(days);
    hour.textContent = padStart(hours);
    min.textContent = padStart(minutes)
    sec.textContent = padStart(seconds)
    },1000)
    }
    
  flatpickr(inputEl, options)