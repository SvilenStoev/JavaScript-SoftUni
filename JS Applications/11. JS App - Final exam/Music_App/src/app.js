import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './api/data.js';
import { catalogPage } from './views/catalog.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { searchPage } from './views/search.js';

const mainEl = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/search', searchPage);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, mainEl);
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
        Array.from(document.querySelectorAll('nav li.user')).forEach(li => li.style.display = 'inline');
        Array.from(document.querySelectorAll('nav li.guest')).forEach(li => li.style.display = 'none');
    } else {
        Array.from(document.querySelectorAll('nav li.user')).forEach(li => li.style.display = 'none');
        Array.from(document.querySelectorAll('nav li.guest')).forEach(li => li.style.display = 'inline');
    }
}