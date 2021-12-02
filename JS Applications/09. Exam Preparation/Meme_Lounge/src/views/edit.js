import { html } from '../lib.js';
import { editItem, getById } from '../api/data.js';
import { notify } from '../notify.js';

const editTemplate = (onSubmit, item) => html`
<section id="edit-meme">
    <form @submit="${onSubmit}" id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value="${item.title}">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value="${item.description}"></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value="${item.imageUrl}">
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;

export async function editPage(ctx) {
    const itemId = ctx.params.id;
    const item = await getById(itemId);

    ctx.render(editTemplate(onSubmit, item));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageUrl').trim();

        if (title == '' || description == '' || imageUrl == '') {
            return notify('All fields are required!');
        }

        await editItem(itemId, { title, description, imageUrl });

        ctx.page.redirect('/details/' + itemId);
    }
}