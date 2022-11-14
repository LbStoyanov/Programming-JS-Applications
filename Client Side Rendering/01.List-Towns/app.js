import { html,render } from '../node_modules/lit-html/lit-html.js';


const root = document.getElementById('root');

const listTemplate = (data) =>html`
    <ul>
        ${data.map( town => html`<li>${town}</li>`)}
    </ul>
`

document.getElementById('btnLoadTowns').addEventListener('click',(e)=>{
    e.preventDefault();
   
    if (document.getElementById('towns').value !== '') {
        const input = document.getElementById('towns').value.split(', ');
    
        const result = listTemplate(input);
        render(result,root);
    
        document.getElementById('towns').value = '';
    }
    
})