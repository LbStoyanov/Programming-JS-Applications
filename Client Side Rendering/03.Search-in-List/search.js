import { towns } from './towns.js';
import { html,render } from '../node_modules/lit-html/lit-html.js';

const townsRoot = document.getElementById('towns');
const result = document.getElementById('result');


function search() {
   
   document.getElementsByTagName("button")[0].addEventListener('click', searchTown);

   function searchTown(){
      
      const textNode = document.getElementById('searchText');
      const text = textNode.value.toLowerCase();

      update(text);
      updateCount();

      textNode.value = "";
      
   }

   function updateCount(){
      const count = document.querySelectorAll('.active').length;
      const countElement = count ? html`<p>${count} matches found</p>` : "";
      render(countElement,result);
   }

   function renderTowns(townsName, match){

      const townsValue = html`
            <ul>
               ${townsName.map(tn => createTownTemplate(tn,match))}              
            </ul>          
      `

      return townsValue;
      
    } 

    function update(text){
      const ul = renderTowns(towns,text);

      render(ul,townsRoot);

    }

    update();
    
    function createTownTemplate(town, match){
      return html`         
              <li class="${(match && town.toLowerCase().includes(match)) ? "active" : ""}">${town}</li>
      `
    }
}

search();