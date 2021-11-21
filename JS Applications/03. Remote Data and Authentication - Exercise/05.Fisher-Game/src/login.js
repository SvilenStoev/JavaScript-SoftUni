window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('main #loginForm');
    form.addEventListener('submit', onLogin);
})

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const url = 'http://localhost:3030/users/login';
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        };

        const response = await fetch(url, options);

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        const userData = {
            email: result.email,
            id: result._id,
            token: result.accessToken,
        };

        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = '/index.html';
    } catch (err) {
        alert(err.message);
    }
}