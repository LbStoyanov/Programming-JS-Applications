function init(){

}

async function getComments(){

    const response = await fetch('http://localhost:3030/jsonstore/comments');
    const data = await response.json();

    return data;
}

async function postComment(comment){
    const response = await fetch('http://localhost:3030/jsonstore/comments',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)

    });
}