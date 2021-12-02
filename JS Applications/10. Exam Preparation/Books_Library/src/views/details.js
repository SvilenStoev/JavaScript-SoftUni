import { deleteItem, getById, likeItem, getLikesById } from '../api/data.js';
import { getUserData } from '../util.js';
import { html } from '../lib.js';

const detailsTemplate = (item, isOwner, likes, onDelete, onLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${item.title}</h3>
        <p class="type">Type: ${item.type}</p>
        <p class="img"><img src="${item.imageUrl}"></p>
        <div class="actions">
            ${isOwner 
            ? html`<a class="button" href="/edit/${item._id}">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
            : html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`}

            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${item.description}</p>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const itemId = ctx.params.id;
    const item = await getById(itemId);
    const likes = await getLikesById(itemId);

    const userData = getUserData();
    const isOwner = userData && item._ownerId == userData.id;

    ctx.render(detailsTemplate(item, isOwner, likes, onDelete, onLike));

    async function onLike() {
        const result = await likeItem(itemId);
    }

    async function onDelete() {
        const choise = confirm('Are you sure you want to delete this item forever?');

        if (choise) {
            await deleteItem(ctx.params.id);
            ctx.page.redirect('/books');
        }
    }
}