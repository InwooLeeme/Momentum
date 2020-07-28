
var lesson = document.querySelector('.lesson__text');

function getNumber(number){

    if(number === 0){
        lesson.innerText = `"I never dreamed about success, I worked for it."`;
    }
    else if(number === 1){
        lesson.innerText = `"Do not try to be original, just try to be good."`;
    }
    else{
        lesson.innerText = `"Do not be afraid to give up the good to go for the great."`;
    }
}

function generateNum(){
    var number = Math.floor(Math.random() * 3);
    console.log(number);
    return number;
}

function init(){
    var randomNumber = generateNum();
    getNumber(randomNumber);
}

init();