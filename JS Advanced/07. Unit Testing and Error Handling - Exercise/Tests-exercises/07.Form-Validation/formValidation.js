function validate() {
    const submitBtnEl = document.getElementById('submit');
    const companyCheckEl = document.getElementById('company');
    const companyInfoEl = document.getElementById('companyInfo');
    const usernameInputEl = document.getElementById('username');
    const emailInputEl = document.getElementById('email');
    const passwordInputEl = document.getElementById('password');
    const confirmPasswordEl = document.getElementById('confirm-password');
    const companyInputEl = document.getElementById('companyNumber');
    const validDivEl = document.getElementById('valid');

    const usernameRegEx = /^[a-zA-Z0-9]{3,20}$/;
    const emailRegEx = /^[\w]+@[\w]+\.[\w]+$/;
    const passwordRegEx = /^[\w]{5,15}$/;
    const companyRegEx = /^[1-9][0-9]{3}$/;

    companyCheckEl.addEventListener('click', showCompanyInfo);
    submitBtnEl.addEventListener('click', validator);

    function showCompanyInfo() {
        if (companyCheckEl.checked) {
            companyInfoEl.style.display = 'block';
        } else {
            companyInfoEl.style.display = 'none';
        }
    }

    function validator(ev) {
        ev.preventDefault();

        if (!usernameRegEx.test(usernameInputEl.value)) {
            usernameInputEl.style.borderColor = 'red';
        } else {
            usernameInputEl.style.borderColor = '';
        }

        if (!emailRegEx.test(emailInputEl.value)) {
            emailInputEl.style.borderColor = 'red';
        } else {
            emailInputEl.style.borderColor = '';
        }

        if (!passwordRegEx.test(passwordInputEl.value) || passwordInputEl.value != confirmPasswordEl.value) {
            passwordInputEl.style.borderColor = 'red';
        } else {
            passwordInputEl.style.borderColor = '';
        }

        if (!passwordRegEx.test(confirmPasswordEl.value) || passwordInputEl.value != confirmPasswordEl.value) {
            confirmPasswordEl.style.borderColor = 'red';
        } else {
            confirmPasswordEl.style.borderColor = '';
        }

        if (!companyRegEx.test(companyInputEl.value) && companyCheckEl.checked) {
            companyInputEl.style.borderColor = 'red';
        } else {
            companyInputEl.style.borderColor = '';
        }

        let isInvalid = Array.from(document.querySelectorAll('input')).some(i => i.style.borderColor == 'red');

        if (isInvalid) {
            validDivEl.style.display = 'none';
        } else {
            validDivEl.style.display = 'block';
        }
    };
}
