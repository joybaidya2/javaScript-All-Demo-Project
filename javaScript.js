function addCol(){
const table = document.getElementById('tableForm').querySelector('thead tr');

const newCol = document.createElement('th');
newCol.textContent = "House";

table.appendChild(newCol);
}