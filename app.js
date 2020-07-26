var list = document.getElementById("list")
function addTodo(){
    var todo_item =document.getElementById("todo-item");
//li creat
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);
//delete btn
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onClick","deleteItem(this)")
    delBtn.appendChild(delText);

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT");
    // delBtn.setAttribute("class","btn")
    // delBtn.setAttribute("onClick","deleteItem(this)")
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick","editItem(this)");

    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li) //this line is to print on browser
    todo_item.value =""    //to empty the input

    console.log(li)

}
function deleteItem(e){
    e.parentNode.remove()
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue
    var editValue = prompt("edit value", val)
    // e.parentNode.firstChild.nodeValue = "hina"
    e.parentNode.firstChild.nodeValue = editValue;
}
function deleteAll(){
    list.innerHTML = ""
}

