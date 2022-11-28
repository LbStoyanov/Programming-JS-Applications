const list = document.getElementById('comments');
/* const nameInput = document.querySelector('[name="name"]');
const contentInput = document.querySelector('[name="content"]'); */
const loadBtn = document.getElementById('load');
const sendBtn = document.getElementById('comment-form');


function init(){
    loadBtn.addEventListener('click', getComments);

    sendBtn.addEventListener('submit', onPost);

    list.addEventListener('click', onCommentClick);

    getComments();
}

async function onPost(event){
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData.entries());

    const name = data.name;
    const content = data.content;

    const result = await postComment({name,content});
    list.prepend(createCommentCard(result));

}

function displayComments(comments){
    
    list.replaceChildren(...comments.map(createCommentCard))
}

function createCommentCard(comment){
    const element = document.createElement('article');
    ///WRONG APPROACH.Just for save time in the demo!!!

    element.innerHTML = `<header><h3>${comment.name}</h3></header>
    <main><p>${comment.content}</p><button>Delete</button></main>`;

    element.id = comment._id;


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

function onCommentClick(e){
    if (e.target.tagName == 'BUTTON') {
        const choice = confirm('Are you sure you want to delete this comment?');
        if (choice) {
            const commentId = e.target.parentElement.parentElement.id;
            deleteComment(commentId);
        }
    }
}

async function deleteComment(id){
    const response = await fetch('http://localhost:3030/jsonstore/comments/' + id, {
        method: 'DELETE'
    });

    const element = document.getElementById(id).remove();
}

async function updateComment(id, comment){
    const response = await fetch('http://localhost:3030/jsonstore/comments/' + id,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })

    return response.json();

    //TODO: Add update button and test the function!!!
}

init();