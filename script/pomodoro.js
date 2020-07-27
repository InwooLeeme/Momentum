var timer = document.querySelector('.timer');

var deFaultTime = 3000;     // 50min

function setTime(){
    minute = parseInt(deFaultTime / 60);
    second = parseInt(deFaultTime % 60);

    timer.innerText = `${minute < 10 ? `0${minute}`:`${minute}`}:${second < 10 ? `0${second}`:`${second}`}`;
    deFaultTime--;
}

function init(){
    setInterval(setTime,1000);
}

init();
