import { html, until } from '../lib.js';
import { getAll, getMyItems } from '../api/data.js';
import { getUserData } from '../util.js';

const itemTemplate = (item) => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src="${item.img}" />
            <p>Description here</p>
            <footer>
                <p>Price: <span>${item.price} $</span></p>
            </footer>
            <div>
                <a href="/details/${item._id}" class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>`;

const catalogTemplate = (dataPromise, userpage) => html`<div class="row space-top">
    <div class="col-md-12">
        ${userpage ? html`<h1>Welcome to My Publications</h1>` : html`<h1>Welcome to Furniture System</h1>`}
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<div class="row space-top">
    ${until(dataPromise)}
</div>`;

export async function catalogPage(ctx) {
    const userpage = ctx.pathname == '/my-furniture';
    ctx.render(catalogTemplate(loadItem(userpage), userpage));
}

async function loadItem(userpage) {
    let items = [];
    SlickLoader.enable();

    if (userpage) {
        const userId = getUserData().id;
        items = await getMyItems(userId);
    } else {
        items = await getAll();

    }
    SlickLoader.disable();

    return items.map(itemTemplate);
}