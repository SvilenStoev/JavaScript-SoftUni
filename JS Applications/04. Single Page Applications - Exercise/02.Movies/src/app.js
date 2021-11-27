import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
import { showDetails } from "./details.js";

const nav = document.querySelector('nav');

const views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
};

nav.addEventListener('click', (event) => {
    const show = views[event.target.id];

    if (typeof show == 'function') {
        event.preventDefault();
        show();
    }
});

showHome();
updateNav();

export function updateNav() {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData != null) {
        [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'block');
        [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'none');

        nav.querySelector('#welcomeMsg').textContent = `Welcome, ${userData.email}`;

 
    } else {
        [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'none');
        [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'block');
    }
}
