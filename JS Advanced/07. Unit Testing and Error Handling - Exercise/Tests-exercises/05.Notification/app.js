function notify(message) {
    const notificationEl = document.getElementById('notification');
    notificationEl.addEventListener('click', () => {
      notificationEl.style.display = 'none';
    });

    notificationEl.textContent = message;
    notificationEl.style.display = 'block';
}