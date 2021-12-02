import { html } from '../lib.js';
import { getUserData } from '../util.js';
import { getMyItems } from '../api/data.js';

const itemTemplate = (item) => html`
<div class="user-meme">
    <p class="user-meme-title">${item.title}</p>
    <img class="userProfileImage" alt="meme-img" src="${item.imageUrl}">
    <a class="button" href="/details/${item._id}">Details</a>
</div>`;

const profileTemplate = (myItems, userData) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${userData.gender}.png">
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${myItems.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        <!-- Display : All created memes by this user (If any) -->
        ${myItems.length == 0
            ? html`<p class="no-memes">No memes in database.</p>`
            : myItems.map(itemTemplate)}
    </div>
</section>`;

export async function profilePage(ctx) {
    const userData = getUserData();

    if (userData) {
        const userId = userData.id;

        const myItems = await getMyItems(userId);

        ctx.render(profileTemplate(myItems, userData));
    }
}