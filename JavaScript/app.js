let count = 0;

function changeNum() {
  document.getElementById('state_num').innerHTML = count
  count +=1;
}


function getTime () {

const hours = document.querySelector("#hour")
const minute = document.querySelector("#minutes")
const second = document.querySelector("#seconds")
  
const time = new Date;

const hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();

hours.textContent = hour;
minute.textContent = minutes;
second.textContent = seconds;


return `${hour}:${minutes}:${seconds}`
}

setInterval(getTime, 1000)