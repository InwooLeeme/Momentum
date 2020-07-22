
var body = document.querySelector('body'),
    lesson = document.querySelector('.lesson__text');

function paintText(textNumber){
    var text = new Text(textNumber);
    lesson.innerText = `./lesson/${textNumber + 1}.txt`;
    
    lesson.classList.add("showing");
    lesson.appendChild(text);
    console.log("Done");
}

function genRandomNumber(){
    var number = Math.floor(Math.random() * 2);
    return number;
}

function init(){
    var randomText = genRandomNumber();
    paintText(randomText);

}

init();