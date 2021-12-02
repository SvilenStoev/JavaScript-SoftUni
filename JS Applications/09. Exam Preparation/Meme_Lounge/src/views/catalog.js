import { html } from '../lib.js';
import { getAll } from '../api/data.js';

const itemTemplate = (item) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${item.title}</p>
            <img class="meme-image" alt="meme-img" src="${item.imageUrl}">
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${item._id}">Details</a>
        </div>
    </div>
</div>`;

const catalogTemplate = (items) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        ${items.length == 0 
        ? html`<p class="no-memes">No memes in database.</p>`
        : items.map(itemTemplate)}
    </div>
</section>`;
 
export async function catalogPage(ctx) {
    const items = await getAll();

    ctx.render(catalogTemplate(items));
}