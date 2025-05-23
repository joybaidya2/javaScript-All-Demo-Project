document.getElementById("studentForm").addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById('name').value;
  const roll = document.getElementById('roll').value;
  const mark = document.getElementById('mark').value;

  const student = {name, roll, mark};

  let students = JSON.parse(sessionStorage.getItem('students')) || [];
  students.push(student);

  sessionStorage.setItem('students', JSON.stringify(students));

  document.getElementById("studentForm").reset();
  alert("Student Infromation Saved!");
});

function dataShow(){
  const students = JSON.parse(sessionStorage.getItem('students')) || [];
  const tbody = document.getElementById("dataTable").querySelector('tbody');

   tbody.innerHTML = '';
  students.forEach(function(student){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.roll}</td>
    <td>${student.mark}</td>
    `;
    tbody.appendChild(row);
  });
}