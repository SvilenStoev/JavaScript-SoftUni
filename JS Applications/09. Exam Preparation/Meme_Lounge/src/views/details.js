import { deleteItem, getById } from '../api/data.js';
import { getUserData } from '../util.js';
import { html } from '../lib.js';

const detailsTemplate = (item, isOwner, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${item.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${item.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p> ${item.description} </p>

            ${isOwner ? html`<a class="button warning" href="/edit/${item._id}">Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>`
            : null}

        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const item = await getById(ctx.params.id);

    const userData = getUserData();
    const isOwner = userData && item._ownerId == userData.id;

    ctx.render(detailsTemplate(item, isOwner, onDelete));

    async function onDelete() {
        const choise = confirm('Are you sure you want to delete this item forever?');

        if (choise) {
            await deleteItem(ctx.params.id);
            ctx.page.redirect('/memes');
        }
    }
}