function toggle() {
    const buttonEl = document.querySelectorAll('body span.button')[0];
    //const buttonElText = buttonEl.textContent;

    const extraText = document.getElementById('extra');

    buttonEl.textContent = buttonEl.textContent == 'More' ? 'Less' : 'More';
    extraText.style.display = extraText.style.display == 'block' ? 'none'  : 'block';

    // if (buttonElText == 'More') {
    //     extraText.style.display = 'block';
    //     buttonEl.textContent = 'Less';
    // } else {
    //     extraText.style.display = 'none';
    //     buttonEl.textContent = 'More';
    // }
}