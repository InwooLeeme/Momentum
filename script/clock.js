
var time = document.querySelector('.time');

function getTime(){
    var date = new Date();
    var Hour = date.getHours();
    var Minutes = date.getMinutes();
    var Seconds = date.getSeconds();
    time.innerText = `${Hour < 10 ? `0${Hour}`:`${Hour}`}:${Minutes < 10 ? `0${Minutes}`:`${Minutes}`}:${Seconds < 10 ? `0${Seconds}`:`${Seconds}`}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();