import { showView } from './dom.js';
import { showHome } from './home.js';
import { updateNav } from './app.js';

const section = document.getElementById('form-login');
const form = section.querySelector('form');
form.addEventListener('submit', onLogin)

section.remove();

export function showLogin() {
    showView(section);
}

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }

        const res = await fetch('http://localhost:3030/users/login', options);

        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const result = await res.json();
        
        localStorage.setItem('userData', JSON.stringify({
            email: result.email,
            id: result._id,
            token: result.accessToken
        }));

        form.reset();
        updateNav();
        showHome();

    } catch (error) {
        alert(error.message);
    }
}