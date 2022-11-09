let addTaskBtn = document.querySelector("#addBtn");
addTaskBtn.addEventListener("click", addTask);

function addTask() {
    let addText = document.querySelector("#addText").value;

    //parentNode
    let newTodos = document.querySelector("#newTodos");

    //childNode, new element
    let taskItem = document.createElement("div");
    let taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.setAttribute("disabled", "");
    taskInput.value = addText;

    //edit
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "<i class='fa-regular fa-pen-to-square icon'></i>";
    editBtn.classList = "editBtn";
    editBtn.addEventListener("click", editValue);

        
    //delete
    let delBtn = document.createElement("button");
    delBtn.type = "submit";
    alert("Task submitted.")
    delBtn.innerHTML = "<i class='fa-solid fa-xmark icon'></i>"; 
    delBtn.addEventListener("click", delTask);
    
    //append
    newTodos.appendChild(taskItem);
    taskItem.appendChild(taskInput);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(delBtn);
    
    let count = newTodos.childElementCount;
    if (count == 5) {
        addBtn.setAttribute("disabled", "");
        alert("You have reached the limit.");
    }
    
    function editValue() {
            taskInput.removeAttribute("disabled", "");

            let saveBtn = document.createElement("button");
            saveBtn.innerHTML = "<i class='fa-regular fa-floppy-disk icon'></i>";
            saveBtn.classList = "saveBtn";
            saveBtn.addEventListener("click", saveValue);

            newTodos.appendChild(saveBtn);

                function saveValue() {
                    let sValue = taskInput.value;
                    alert("Changes saved!");
                    taskItem.setAttribute("disabled", "");

                    saveBtn.remove();
                }
        }

    function delTask() {
            taskItem.remove();
            alert("Task deleted.")
            addBtn.removeAttribute("disabled", "");
}
}