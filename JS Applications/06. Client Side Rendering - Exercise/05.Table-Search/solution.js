import { html, render } from './node_modules/lit-html/lit-html.js';

let students;
start();

const tbodyEl = document.querySelector('table tbody');
const inputEl = document.getElementById('searchField');

document.querySelector('#searchBtn').addEventListener('click', onSearch);

function onSearch() {
   const searchTerm = inputEl.value.trim().toLocaleLowerCase();

   for (let student of students) {
      const match = Object.values(student.item).some(i => i.toLocaleLowerCase().includes(searchTerm));
      
      if (match && searchTerm) {
         student.selected = true;
      } else {
         student.selected = false;
      }
   }

   update();
}

const studentRow = (student) => html`
<tr class=${student.selected ? 'select' : ''}>
   <td>${student.item.firstName} ${student.item.lastName}</td>
   <td>${student.item.email}</td>
   <td>${student.item.course}</td>
</tr>`;

async function start() {
   const res = await fetch('http://localhost:3030/jsonstore/advanced/table');
   const data = await res.json();
   students = Object.values(data).map(s => ({ item: s, selected: false }));

   update();
}

function update() {
   render(students.map(studentRow), tbodyEl);
}