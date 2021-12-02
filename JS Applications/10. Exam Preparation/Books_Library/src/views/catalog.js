import { html } from '../lib.js';
import { getAll } from '../api/data.js';

const itemTemplate = (item) => html`
<li class="otherBooks">
    <h3>${item.title}</h3>
    <p>Type: ${item.type}</p>
    <p class="img"><img src="${item.imageUrl}"></p>
    <a class="button" href="/details/${item._id}">Details</a>
</li>`;

const catalogTemplate = (items) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <ul class="other-books-list">
    ${items.length == 0 
        ? html`<p class="no-books">No books in database!</p>`
        : items.map(itemTemplate)}
    </ul>
</section>`;
 
export async function catalogPage(ctx) {
    const items = await getAll();

    ctx.render(catalogTemplate(items));
}