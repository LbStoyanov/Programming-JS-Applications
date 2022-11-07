let phonebookList = document.getElementById('phonebook');

function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click',loadPhonebook);
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
        li.appendChild(button);
        phonebookList.appendChild(li);
    }

}

attachEvents();