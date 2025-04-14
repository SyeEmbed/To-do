function addTodo(){
    const todoElement = document.getElementById("newTodo");
    const todo = todoElement.value.trim();
    todoElement.value = "";

    if (!todo) return;

    const list = document.getElementById("list");
    const li = document.createElement("p");
    li.textContent = todo;
    
    li.onclick = function(){
        li.classList.toggle("done")
    }
    
    list.appendChild(li);
    
}
 