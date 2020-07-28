var toDoForm = document.querySelector('.toDoForm'),
    toDoInput = toDoForm.querySelector('.toDoInput'),
    toDoList = document.querySelector('.toDoList');

var TODOS_LS = 'toDos';

var toDos = [];

function deleteToDo(event){
   var btn = event.target;
   var li = btn.parentNode;
   toDoList.removeChild(li);
   var cleanToDos = toDos.filter(function(toDo){
       return toDo.id !== parseInt(li.id);
   });
   toDos = cleanToDos;
   saveToDos();
}

function textDecorate(event){
    var number = event.target;
    number.className += "complete";
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDos(text){
    var li = document.createElement("li");
    var delBtn = document.createElement('button');
    delBtn.innerText = "X";
    delBtn.addEventListener("click",deleteToDo);
    var span = document.createElement('span');
    span.addEventListener("click",textDecorate);
    var newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    var toDoObj = {
        text : text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}



function handldeSubmit(event){
    event.preventDefault();
    var currentValue = toDoInput.value;
    paintToDos(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    var loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !== null){
        var parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(function(toDo){
            paintToDos(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handldeSubmit);
}

init();

