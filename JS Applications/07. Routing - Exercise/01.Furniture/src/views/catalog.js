import { html, until } from '../lib.js';
import { getAll } from '../api/data.js';

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

const catalogTemplate = (dataPromise) => html`<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<div class="row space-top">
    ${until(dataPromise, html`<p>Loading &hellip;</p>`)}
</div>`;

export async function catalogPage(ctx) {
    ctx.render(catalogTemplate(loadItem()));
}

async function loadItem() {
    const items = await getAll();

    return items.map(itemTemplate);
}