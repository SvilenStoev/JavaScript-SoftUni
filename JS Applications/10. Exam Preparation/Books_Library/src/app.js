import { logout } from './api/data.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { loginPage } from './views/login.js';
import { catalogPage } from './views/catalog.js';
import { registerPage } from './views/register.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { myItemsPage } from './views/myItems.js';

/* debug */
import * as data from './api/data.js';
window.data = data;

const root = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', catalogPage);
page('/books', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/myBooks', myItemsPage);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/books');
}

function updateUserNav() {
    const userData = getUserData();

    if (userData) {
        document.querySelector('nav div span').textContent = `Welcome, ${userData.email}`;
        document.querySelector('#user').style.display = 'block';
        document.querySelector('#guest').style.display = 'none';
    } else {
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = 'block';
    }
}