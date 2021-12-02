const notifyEl = document.getElementById('errorBox');
const message = notifyEl.querySelector('span');

export function notify(msg) {
    message.textContent = msg;
    notifyEl.style.display = 'block';

    setTimeout(() => notifyEl.style.display = 'none', 3000);
}