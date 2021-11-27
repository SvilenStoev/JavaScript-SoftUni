import { html, render } from './node_modules/lit-html/lit-html.js';

// DOM elements
const selectEl = document.getElementById('menu');
const inputEl = document.getElementById('itemText');

document.querySelector('form').addEventListener('submit', onSubmit);

// lit-html Template
const optionTemplate = (data) => html`<option value="${data._id}">${data.text}</option>`;

// Initial setup
getData();

async function getData() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data = await response.json();

    const dataArr = Object.values(data);

    update(dataArr);
}

function update(dataArr) {
    render(dataArr.map(optionTemplate), selectEl);
}

function onSubmit(ev) {
    ev.preventDefault();

    createText(inputEl.value);
}

async function createText(text) {
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        };

        const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', options);

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        inputEl.value = '';
        getData();

    } catch (error) {
        alert(error.message);
    }
}