import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
import { showDetails } from "./details.js";

const views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
};

document.querySelector('nav').addEventListener('click', (event) => {
    const show = views[event.target.id];

    if (typeof show == 'function') {
        event.preventDefault();
        show();
    }
});

showHome();


