var hello = document.querySelector('.js-sayHello'),
    form = document.querySelector('.input__form'),
    input = form.querySelector('.askUserName');

var User_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(User_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    var currentValue = input.value;
    paintName(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
    
}

function paintName(text){
    form.classList.remove(SHOWING_CN);
    hello.classList.add(SHOWING_CN);
    hello.innerText = `Hello ${text}`;
}

function loadName(){
    var currentUser = localStorage.getItem(User_LS);
    if(currentUser === null){
        askForName();
    }
    else{
        paintName(currentUser);
    }
}

function init(){
    loadName();
}

init();