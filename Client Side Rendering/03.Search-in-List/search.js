import { towns } from './towns.js';
import { html,render } from '../node_modules/lit-html/lit-html.js';

const searchTemplate = (towns, match) => html`
   <article>
      <div id="towns">
         <ul>
            ${towns.map(t=>itemTemplate(t,match))};
         </ul>
      </div>
      <input type="text" id="searchText" />
      <button @click = ${search}>Search</button>
      <div id="result">${countMatches(towns,match)}</div>
   </article>
`

const itemTemplate = (town,match) =>html`
   <li class = ${(match && town.includes(match)) ? 'active' : ''}>${town}</li>
`

const townsRoot = document.body;
update();

function update(match = ''){
   const result = searchTemplate(towns,match);
   render(result,townsRoot);
}

function search() {
   const match = document.getElementById('searchText').value;
   update(match);
 
}

function countMatches(towns,match){
   const matches = towns.filter(x=> match && x.includes(match)).length;
   return matches ? `${matches} matches found` : '0 matches found';
}
