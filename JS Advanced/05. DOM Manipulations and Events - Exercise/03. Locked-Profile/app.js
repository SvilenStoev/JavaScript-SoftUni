function lockedProfile() {
    const btnEls = document.getElementsByTagName('button');
    Array.from(btnEls).forEach(b => b.addEventListener('click', showMore));

    function showMore(ev) {
        const currDivEl = ev.target.parentNode.getElementsByTagName('div')[0];
        const isProfileLocked = ev.target.parentNode.querySelector('input[value=lock]').checked;

        if (!isProfileLocked) {
            const hiddenText = currDivEl.style.display;

            currDivEl.style.display = hiddenText == '' ? 'block' : '';
            ev.target.textContent = hiddenText == '' ? 'Hide it' : 'Show more';
        }
    }
}