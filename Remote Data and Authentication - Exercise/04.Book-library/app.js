document.getElementById('loadBooks').addEventListener('click',loadAllBooks);
const body = document.getElementById('tbody');
const url = 'http://localhost:3030/jsonstore/collections/books';
const formData = document.getElementById('submit').addEventListener('submit',createBook);

async function loadAllBooks(){
    
    const response = await fetch(url);

    const data = await response.json();

    const allBooks =  Object.values(data);

    allBooks.map(b => {
        const title = b.title;
        const author = b.author;

        const book = createBookTemplate(title,author);

        body.appendChild(book);
        
    });


}

async function createBook(event){
    event.preventDefault();
    
    const dataInput = new FormData(event.target);
   
    const {title,author} = Object.fromEntries(dataInput.entries());

    await postBook({title,author});

    document.getElementById('submit').reset();

}   

async function postBook(book){
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)

    });

    const data = await response.json();

    return data;
}

function onBookClick(e){
    if (e.target.tagName == 'BUTTON') {
        const choice = confirm('Are you sure you want to delete this book?');
        if (choice) {
            debugger;
            const bookId = e.target.parentElement.parentElement.id;
            deleteBook(bookId);
        }
    }
}

async function deleteBook(id){
    
    const response = await fetch(`${url}/${id}`,{
        method: 'DELETE'
    });

    //const element = document.getElementById(id).remove();

    body.innerHTML ='';
}


function getBook(id){
    //TODO: Implement the solution!
}

function createBookTemplate(title,author){
    
    let tr = document.createElement('tr');
    
    let td1 = document.createElement('td');
    td1.textContent = title;


    let td2 = document.createElement('td');
    td2.textContent = author;

    let td3 = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click',onBookClick);

    td3.appendChild(editBtn);
    td3.appendChild(deleteBtn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    return tr;

}