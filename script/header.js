
var searchIcon = document.querySelector('.fa-search'),
    body = document.querySelector('body'),
    div = document.querySelector('.search__menu');

function handleClick(){
    div.classList.toggle('on');
}

function init(){
    searchIcon.addEventListener("click",handleClick);
}

init();