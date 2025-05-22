function addTableCol(){
const table = document.getElementById("myTable").querySelector('thead tr');

const addCol = document.createElement("th");
addCol.textContent = "House";

table.appendChild(addCol);
}

