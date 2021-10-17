function validate() {
    const inputEl = document.getElementById('email');
    inputEl.addEventListener('change', check);

    const regEx = /^[a-z]+@[a-z]+\.[a-z]+$/;

    function check() {
        if(!regEx.test(inputEl.value)) {
            inputEl.classList.add('error');
        } else {
            inputEl.classList.remove('error');
        }
    }
}