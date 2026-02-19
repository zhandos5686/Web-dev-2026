const form = document.getElementById("todoForm");
const input = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", function(e){
    e.preventDefault();

    if(input.value.trim() === "") return;

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = input.value;

    li.textContent = input.value;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑"; 
    deleteBtn.onclick = function(){
        li.remove();
        checkbox.remove();
    }
    li.appendChild(checkbox);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);


    input.value = "";
});