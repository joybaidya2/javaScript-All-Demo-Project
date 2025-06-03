function addRow(name, roll, mark){
    const table = document.getElementById("myTable").getElementsByTagName("tbody")[0];

    const newRow = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.textContent = name;

    const rollTd = document.createElement("td");
    rollTd.textContent = roll;

    const markTd = document.createElement("td");
    markTd.textContent = mark;

    const buttonTd = document.createElement("td");
    buttonTd.textContent = "Delete";

    buttonTd.style.cursor = "pointer";
    buttonTd.style.color = "red";
    buttonTd.onclick = function(){
        table.removeChild(newRow);
    }

    newRow.appendChild(nameTd);
    newRow.appendChild(rollTd);
    newRow.appendChild(markTd);
    newRow.appendChild(buttonTd);

    table.appendChild(newRow);
}
function addTableRow(){
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const mark = document.getElementById("mark").value;
    addRow(name, roll, mark);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("mark").value = "";
}
