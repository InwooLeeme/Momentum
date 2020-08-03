
var text =[
    `"I never dreamed about success, I worked for it."`,
    `"Do not try to be original, just try to be good."`,
    `"Do not be afraid to give up the good to go for the great."`,
    `"The road to success and the road to failure are almost exactly the same.`,
    `"It is better to fail in originality than to succeed in imitation.`
    ]

var counter = 0;
var lesson = document.querySelector(".lesson__text");
var inst = setInterval(changeText,60000);

function changeText(){
    lesson.innerHTML = text[counter];
    counter++;
    if(counter >= text.length){
        counter = 0;
    }
    
}

function init(){
    changeText();
}

init();