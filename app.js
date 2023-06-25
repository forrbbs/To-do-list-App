const inputBox = document.getElementById("myInput");
const listContainer = document.getElementById("myUl");

function newElement(){
    if(inputBox.value === ""){
        alert("You must write something!")
    }
    else{
        let Li = document.createElement("li");
        Li.innerHTML = inputBox.value;
        listContainer.appendChild(Li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        span.className = "close";
        Li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();