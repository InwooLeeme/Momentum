var body = document.querySelector('body');

var IMG_NUMBER = 8;

function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(imgNumber){
    var image = new Image();
    image.src = `./img/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(){
    var number = Math.floor(Math.random() * IMG_NUMBER);
    return number;

}

function init(){
    var randomNumber = genRandom();
    paintImage(randomNumber);
}

init();