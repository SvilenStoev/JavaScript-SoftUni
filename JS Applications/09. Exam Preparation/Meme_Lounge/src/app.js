import { logout } from './api/data.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { catalogPage } from './views/catalog.js';
import { registerPage } from './views/register.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';

/* debug */
import * as data from './api/data.js';
window.data = data;

const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/memes', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/profile', profilePage);

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
    page.redirect('/');
}

function updateUserNav() {
    const userData = getUserData();

    if (userData) {
        document.querySelector('nav div.profile span').textContent = `Welcome, ${userData.email}`;
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}