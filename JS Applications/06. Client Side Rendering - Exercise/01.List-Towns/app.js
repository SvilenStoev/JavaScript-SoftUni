import { html, render } from './node_modules/lit-html/lit-html.js';

const div = document.getElementById('root');
const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

function onSubmit(ev) {
    ev.preventDefault();

    const towns = document.getElementById('towns').value.split(',').map(t => t.trim());

    const result = listTemplate(towns);
    render(result, div);
}

const listTemplate = (towns) => html`
<ul>
    ${towns.map(t => html`<li>${t}</li>`)}
</ul>`;