import { showHomePage } from './views/home.js';
import { showCatalogPage } from './views/catalog.js';
import { showCreatePage } from './views/create.js';
import { showLoginPage } from './views/login.js';
import { showRegisterPage } from './views/register.js';
import { showDetailsPage } from './views/details.js';
import { showView } from './dom.js';

const ctx = {
    goTo,
    showView,
};

const links = {
    'homeLink': 'home',
    'getStartedLink': 'home',
    'createLink': 'create',
    'catalogLink': 'catalog',
    'loginLink': 'login',
    'registerLink': 'register',
    'logoutBtn': 'logout'
};

const views = {
    'home': showHomePage,
    'catalog': showCatalogPage,
    'create': showCreatePage,
    'login': showLoginPage,
    'register': showRegisterPage,
    'details': showDetailsPage,
};

const nav = document.querySelector('nav');
nav.addEventListener('click', onNavigate);

goTo('home');

function onNavigate(event) {

    const targetId = event.target.id;

    const name = links[targetId];

    if (name) {
        event.preventDefault();
        goTo(name);
    }
}

export function goTo(name, ...params) {
    const view = views[name];

    if (typeof view == 'function') {
        view(ctx, ...params);
    }
}