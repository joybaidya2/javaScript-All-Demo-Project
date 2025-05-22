function addTableAll(){
    function addCol(){
        const table = document.getElementById("myTable").querySelector('thead tr');

        const newCol = document.createElement('th');
        newCol.textContent = "House";

        table.appendChild(newCol)
    }
    function addRow(){
        const table = document.getElementById("myTable").querySelector("tbody tr");

        const newRow = document.createElement("td");
        newRow.textContent = "Rick's Palace";

        table.appendChild(newRow);
    }
    addCol();
    addRow();
}