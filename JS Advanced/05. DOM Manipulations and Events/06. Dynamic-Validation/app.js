function validate() {
    const inputEl = document.getElementById('email');
    inputEl.addEventListener('change', checkEmail);

    let regEx = new RegExp('[A-Za-z0-9]+@[A-Za-z]+[.][A-Za-z]+', 'g');

    function checkEmail(e) {
        if (!regEx.exec(inputEl.value)) {
            inputEl.classList.add("error");
        }
        else {
            inputEl.classList.remove("error");
        }
    }
}