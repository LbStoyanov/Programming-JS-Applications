const list = document.getElementById('comments');
const nameInput = document.querySelector('[name="name"]');
const contentInput = document.querySelector('[name="content"]');
const loadBtn = document.getElementById('load');
const sendBtn = document.getElementById('send');


function init(){
    loadBtn.addEventListener('click', getComments);

    sendBtn.addEventListener('click', onPost);

    getComments();
}

async function onPost(){
    const name = nameInput.value;
    const content = contentInput.value;

    const result = await postComment({name,content});
    list.appendChild(createCommentCard(result));

}

function displayComments(comments){
    
    list.replaceChildren(...comments.map(createCommentCard))
}

function createCommentCard(comment){
    const element = document.createElement('article');
    ///WRONG APPROACH.Just for save time in the demo!!!

    element.innerHTML = `<header><h3>${comment.name}</h3></header>
    <main><p>${comment.content}</p></main>`;


    return element;

}

async function getComments(){

    const response = await fetch('http://localhost:3030/jsonstore/comments');
    const data = await response.json();

    const comments =  Object.values(data);
    displayComments(comments);
}

async function postComment(comment){
    const response = await fetch('http://localhost:3030/jsonstore/comments',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)

    });

    const data = await response.json();

    return data;
}

init();