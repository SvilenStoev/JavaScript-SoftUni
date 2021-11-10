async function lockedProfile() {
    document.getElementById('main').innerHTML = 'Loading...';
    const profiles = await getProfiles();

    displayProfiles(profiles);
}

function displayProfiles(data) {
    const main = document.getElementById('main');

    let resultHtml = '';
    let i = 1;

    for (let user of data) {
        resultHtml += `<div class="profile">
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user${i}Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user${i}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user${i}Username" value="${user.username}" disabled readonly />
        <div class="hiddenInfo">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${i}Email" value="${user.email}" disabled readonly />
            <label>Age:</label>
            <input type="email" name="user${i}Age" value="${user.age}" disabled readonly />
        </div>
        
        <button>Show more</button>
    </div>`

        i++;
    }

    main.innerHTML = resultHtml;

    document.querySelectorAll('button').forEach(btn => btn.addEventListener('click', details));
}

function details(ev) {
    const hiddenDiv = ev.target.parentNode.getElementsByTagName('div')[0];
    const isLocked = ev.target.parentNode.querySelector('input[value=lock]').checked;
    const btnText = ev.target.textContent;

    if (!isLocked) {
        if (hiddenDiv.classList.contains('hiddenInfo') && btnText == 'Show more') {
            hiddenDiv.classList.remove('hiddenInfo');
        } else {
            hiddenDiv.classList.add('hiddenInfo');
        }

        ev.target.textContent = btnText == 'Hide' ? 'Show more' : 'Hide';
    }

}

async function getProfiles() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const response = await fetch(url);
    const data = await response.json();

    return Object.values(data);
}