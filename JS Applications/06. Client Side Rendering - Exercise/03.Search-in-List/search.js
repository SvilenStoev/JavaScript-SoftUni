import { towns as townNames } from './towns.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const towns = townNames.map(t => ({ name: t, active: false }));
const townsDiv = document.getElementById('towns');
const resultDiv = document.getElementById('result');
const input = document.getElementById('searchText');

document.querySelector('button').addEventListener('click', onSearch);

const listTemplate = (town) => html`${html`<li class=${town.active ? 'active' : ''}>${town.name}</li>`}`;

update();

function update() {
   render(html`<ul>${towns.map(listTemplate)}</ul>`, townsDiv);
}

function onSearch() {
   const searchTerm = input.value.trim().toLocaleLowerCase();

   let matches = 0;

   for (let town of towns) {
      if (searchTerm && town.name.toLocaleLowerCase().includes(searchTerm)) {
         town.active = true;
         matches++;
      } else {
         town.active = false;
      }
   }

   resultDiv.textContent = `${matches} matches found`;

   update();
}