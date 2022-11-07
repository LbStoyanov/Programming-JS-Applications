function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';

    let sendBtn = document.getElementById('submit');
    sendBtn.addEventListener('click', createMessage);

    let refreshBtn = document.getElementById('refresh')
    refreshBtn.addEventListener('click',showMessage);



    function createMessage(e){
        fetch(url,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        })
    }

    function showMessage(e){
        
    }


}

attachEvents();