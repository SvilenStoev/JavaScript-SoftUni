function focused() {
    const inputEls = document.getElementsByTagName('input');

    for (const input of Array.from(inputEls)) {
        input.addEventListener('focus', mouseOver);
        input.addEventListener('blur', mouseOut);
    }

    function mouseOver(ev) {
        ev.target.parentNode.classList.add('focused');
    }

    function mouseOut(ev) {
        ev.target.parentNode.classList.remove('focused');
    }
}