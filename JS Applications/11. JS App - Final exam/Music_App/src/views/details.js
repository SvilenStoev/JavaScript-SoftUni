import { html } from '../lib.js';
import { getUserData } from '../util.js';
import { deleteItem, getById } from '../api/data.js';

const detailsTemplate = (album, isOwner, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${album.imgUrl}">
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>Description: ${album.description}</p>
            </div>

            ${isOwner ? html`
            <div class="actionBtn">
                <a href="/edit/${album._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
            </div>` : ''}
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const albumId = ctx.params.id;
    const album = await getById(albumId);
    
    const userData = getUserData();
    const isOwner = userData && album._ownerId == userData.id;

    ctx.render(detailsTemplate(album, isOwner, onDelete));

    async function onDelete() {
        const choise = confirm('Are you sure you want to delete this album forever?');

        if (choise) {
            await deleteItem(albumId);
            ctx.page.redirect('/catalog');
        }
    }
}