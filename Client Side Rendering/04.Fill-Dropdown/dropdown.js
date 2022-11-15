import { html,render } from '../node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

let dropDownMenu = document.getElementById('menu');

async function makeGetRequest(){

    const response = await fetch(url);
    const data = await response.json();
   
    return Object.values(data);
}

 async function initialItemsLoading(){

    const initialDropDownValues =  await makeGetRequest();

    const result = initialDropDownValues.map(x =>  html`<option>${x.text}</option>`);

    render(result,dropDownMenu);

   
}
initialItemsLoading();



function addItem(value) {
    
}

