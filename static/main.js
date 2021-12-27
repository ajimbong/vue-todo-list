let list = document.getElementById("list");
let inputField = document.getElementById("inputField");
let addBtn = document.getElementById("addBtn")
let id; let arrList;

/* console.log(list);
console.log(inputField);
console.log(addBtn); */

//this function takes the input tasks and adds them to the list of todos

function addTodo(){
    if(inputField.value != ""){
        let text = `<li class="list-item">
        <input type="Checkbox"><p>${inputField.value}</p>
        <button id="${id}">X</button>
    </li>`;
        id = 0;
        let position = "beforeend"
        list.insertAdjacentHTML(position, text);
        id++;
    }
}
addBtn.addEventListener('click',addTodo() )