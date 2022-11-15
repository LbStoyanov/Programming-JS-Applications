import { html,render } from '../node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

let dropDownMenu = document.getElementById('menu');
let inputField = document.querySelector('input[type=text]');
let submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', addItem);


async function makeGetRequest(){

    const response = await fetch(url);
    const data = await response.json();
   
    return Object.values(data);
}

 async function initialItemsLoading(){

    const initialDropDownValues =  await makeGetRequest();

    const result = initialDropDownValues.map(x =>  html`<option value="${x._id}">${x.text}</option>`);

    render(result,dropDownMenu);

}

initialItemsLoading();



function addItem() {
    const value = {
        text: inputField.value
    }
    makePostRequest(value);

}

async function makePostRequest(value){
    const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(value)
    })
}

