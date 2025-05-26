const students = [{
name:"Arman",
roll: 213,
mark: 29,
},
{
name:"Nazrul",
roll: 214,
mark: 79,
},
{
name:"jOY",
roll: 214,
mark: 79,
}
];
function addTableRow() {
  const name = document.getElementById('name').value;
  const roll = document.getElementById('roll').value;
  const mark = document.getElementById('mark').value;
  addRow(name, roll, mark);
  document.getElementById('name').value = "";
  document.getElementById('roll').value = "";
  document.getElementById('mark').value = "";
}

function addRow(name, roll, mark){
  const table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
   const newRow = document.createElement("tr");

  const nameTd = document.createElement("td");
  nameTd.textContent = name;

  const rollTd = document.createElement("td");
  rollTd.textContent = roll;

  const marksTd = document.createElement("td");
  marksTd.textContent = mark;

  newRow.appendChild(nameTd);
  newRow.appendChild(rollTd);
  newRow.appendChild(marksTd);

  table.appendChild(newRow);
}

window.onload = function(){
   const table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
   students.forEach(function(value, index){
    console.log(value, index);
   addRow(value.name, value.roll, value.mark);
   })
}
