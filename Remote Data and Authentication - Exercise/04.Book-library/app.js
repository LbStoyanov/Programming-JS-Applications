document.getElementById('loadBooks').addEventListener('click',loadAllBooks);
const body = document.getElementById('tbody');
const url = 'http://localhost:3030/jsonstore/collections/books';

async function loadAllBooks(){
    const response = await fetch(url);

    const data = await response.json();

    const allBooks =  Object.values(data);

    allBooks.map(b => {
        const title = b.title;
        const author = b.author;

        const book = createBook(title,author);

        body.appendChild(book);
        
    });
}

function createBook(title,author){
    
    let tr = document.createElement('tr');
    
    let td1 = document.createElement('td');
    td1.textContent = title;


    let td2 = document.createElement('td');
    td2.textContent = author;

    let td3 = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'

    td3.appendChild(editBtn);
    td3.appendChild(deleteBtn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    return tr;

}