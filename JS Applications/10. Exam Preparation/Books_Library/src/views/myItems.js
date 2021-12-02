import { html } from '../lib.js';
import { getUserData } from '../util.js';
import { getMyItems } from '../api/data.js';

const itemTemplate = (item) => html`
<li class="otherBooks">
    <h3>${item.title}</h3>
    <p>Type: ${item.type}</p>
    <p class="img"><img src="${item.imageUrl}"></p>
    <a class="button" href="/details/${item._id}">Details</a>
</li>`;

const myItemsTemplate = (myItems, userData) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>

    ${myItems.length == 0 
     ? html`<p class="no-books">No books in database!</p>`
     : html`<ul class="my-books-list">${myItems.map(itemTemplate)}</ul>`}

</section>`;

export async function myItemsPage(ctx) {
    const userData = getUserData();

    if (userData) {
        const userId = userData.id;

        const myItems = await getMyItems(userId);

        ctx.render(myItemsTemplate(myItems, userData));
    }
}