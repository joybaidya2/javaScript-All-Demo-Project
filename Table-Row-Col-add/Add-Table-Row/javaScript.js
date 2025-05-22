function addTableRow() {
  const table = document.getElementById("myTable").getElementsByTagName("tbody")[0];

  const newRow = document.createElement("tr");

  const nameTd = document.createElement("td");
  nameTd.textContent = "Joy";

  const rollTd = document.createElement("td");
  rollTd.textContent = "211";

  const marksTd = document.createElement("td");
  marksTd.textContent = "60";

  newRow.appendChild(nameTd);
  newRow.appendChild(rollTd);
  newRow.appendChild(marksTd);

  table.appendChild(newRow);
}
