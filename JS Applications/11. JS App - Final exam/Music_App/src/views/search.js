import { html } from '../lib.js';
import { getUserData } from '../util.js';
import { searchItem } from '../api/data.js';

let userData = null;

const albumTemplate = (album) => html`
<div class="card-box">
    <img src="${album.imgUrl}">
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: $${album.price}</p>
            <p class="date">Release Date: ${album.releaseDate}</p>
        </div>
        ${userData ? html`
        <div class="btn-group">
            <a href="/details/${album._id}" id="details">Details</a>
        </div>` : ''}
    </div>
</div>`;

const searchTemplate = (albums, onSearch, params = '') => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name" .value=${params}>
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    ${params ?
    html`
    <div class="search-result">
        <!--If have matches-->
        ${albums.length == 0
        ? html`<p class="no-result">No result.</p>`
        : html`${albums.map(albumTemplate)}`}
    </div>` : ''}
</section>`;

export async function searchPage(ctx) {
    userData = getUserData();
    const params = ctx.querystring.split('=')[1];
    let albums = [];

    if (params) {
        albums = await searchItem(decodeURIComponent(params));
    }

    ctx.render(searchTemplate(albums, onSearch, params));

    function onSearch(event) {
        event.preventDefault();

        const searchTerm = document.getElementById('search-input').value;

        if (!searchTerm) {
            alert('Search field is required!');
        } else {
            ctx.page.redirect('search?query=' + encodeURIComponent(searchTerm));
        }
    }
}