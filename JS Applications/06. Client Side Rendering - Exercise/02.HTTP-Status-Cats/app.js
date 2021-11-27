import { cats } from './catSeeder.js'
import { html, render } from './node_modules/lit-html/lit-html.js';

const catCard = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>`;

const sectionEl = document.getElementById('allCats');

render(html`<ul>${cats.map(catCard)}</ul>`, sectionEl);

sectionEl.addEventListener('click', (ev) => {
    const target = ev.target;

    if (target.tagName == 'BUTTON') {
        const divEl = target.parentNode.querySelector('div');
        const displayTxt = divEl.style.display;
        
        divEl.style.display = displayTxt == 'none' ? 'block' : 'none';
        target.textContent = displayTxt == 'none' ? 'Hide status code' : 'Show status code';
    }
});