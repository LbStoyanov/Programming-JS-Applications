const list = document.getElementById('comments');
const nameInput = document.querySelector('[name="name"]');
const contentInput = document.querySelector('[name="content"]');
const loadBtn = document.getElementById('load');
const sendBtn = document.getElementById('send');


function init(){
    loadBtn.addEventListener('click', async () => {
        const comments = await getComments();
        displayComments(comments);
    });

    sendBtn.addEventListener('click', onPost);
}

async function onPost(){
    const name = nameInput.value;
    const content = contentInput.value;

    await postComment({name,content});

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

    return Object.values(data);
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