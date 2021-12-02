import { page, render } from './lib.js';
import { catalogPage } from './views/catalog.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { createPage } from './views/create.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

const root = document.querySelector('div.container');

page(decorateContext);
page('/', catalogPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/register', registerPage);
page('/login', loginPage);
page('/my-furniture', () => console.log('my furniture view'));

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);

    next();
}