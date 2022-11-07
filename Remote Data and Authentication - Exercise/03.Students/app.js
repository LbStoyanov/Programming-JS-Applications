const url = "http://localhost:3030/jsonstore/collections/students";
document.getElementById('submit').addEventListener('click',addStudent);

async function addStudent(){
    let firstNameInput = document.querySelector('input[name=firstName]');
    let lastNameInput = document.querySelector('input[name=lastName]');
    let facultyNumber = document.querySelector('input[name=facultyNumber]');
    let grade = document.querySelector('input[name=grade]');


    if (firstNameInput.value !== '' && lastNameInput.value !== '' && facultyNumber.value !== '' && grade.value !=='') {

        let obj = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            facultyNumber: facultyNumber.value,
            grade: grade.value
        }

        let response = await fetch(url,{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj),
        })

        firstNameInput.value = '';
        lastNameInput.value = '';
        facultyNumber.value = '';
        grade.value = '';
    }
}

async function loadStudents() {

    
  
  let table = document.querySelector("#results tbody");

  const response = await fetch(url);

  const data = await response.json();

  let allStudents = Object.values(data);

  for(let student of allStudents){

    let tr = createRoll(student.firstName,student.lastName,student.facultyNumber,student.grade);

    table.appendChild(tr);

  }

  function createRoll(firstName,lastName,facultyNum, grade){

    let tr = document.createElement('tr');
    tr.classList.add('table');

    let td1 = document.createElement('td');
    td1.textContent = firstName;
    
    let td2 = document.createElement('td');
    td2.textContent = lastName;

    let td3 = document.createElement('td');
    td3.textContent = facultyNum;

    let td4 = document.createElement('td');
    td4.textContent = grade;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    return tr;
  }

}

loadStudents();
