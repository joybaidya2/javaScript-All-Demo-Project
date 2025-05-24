const item = document.getElementById('item');
const toDoList = document.getElementById("to-do-list");

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            addToDo(this.value);
            this.value = "";
        }
    }
)
function addToDo(item){
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    ${item}
    <i class ="fas fa-times"></i>
    `;
    listItem.addEventListener(
        "click",
        function(){
            listItem.classList.toggle("done");
        }
    )
    listItem.querySelector('i').addEventListener(
        "click",
        function(){
            listItem.remove();
        }
    )
    toDoList.appendChild(listItem);
}