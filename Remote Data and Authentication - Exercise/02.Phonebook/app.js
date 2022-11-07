let phonebookList = document.getElementById('phonebook');

function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click',loadPhonebook);
    document.getElementById('btnCreate').addEventListener('click',createContact);
}

async function createContact(){
    const url = `http://localhost:3030/jsonstore/phonebook`;

    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');

    if (personInput.value !== '' || phoneInput.value !== '') {

        let contactObj = {
            person: personInput.value,
            phone: phoneInput.value
        }
    
        await fetch(url,{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(contactObj)
        });
    
    }

    personInput.value = '';
    phoneInput.value = '';

    loadPhonebook();
}

async function loadPhonebook(){
    const url = `http://localhost:3030/jsonstore/phonebook`;

    const response = await fetch(url);
    const data = await response.json();

    let contacts = Object.values(data);
    
    for(let person of contacts){

        let li = document.createElement('li');
        li.textContent = `${person.person}: ${person.phone}`;
        let button = document.createElement('button');
        button.classList.add('button');
        button.innerText = 'Delete';
        button.addEventListener('click',deleteContact);
        li.appendChild(button);
        phonebookList.appendChild(li);

        async function deleteContact(){

            //const url = `http://localhost:3030/jsonstore/phonebook/${}`;
           
        }
    }

    

}




attachEvents();