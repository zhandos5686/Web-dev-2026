const addItem = document.getElementById("addItem");
const ul = document.getElementById("items");
const form = document.getElementById("form");
let itemCounter = 0;

form.addEventListener("submit", function(e){
    e.preventDefault();

    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");

    span.textContent = addItem.value;
    delBtn.textContent = "delete";

    delBtn.onclick = function(){
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(delBtn);
    ul.appendChild(li);
    itemCounter++;
    
    addItem.value = "";
});
