let userData = null;

window.addEventListener('DOMContentLoaded', () => {
    userData = JSON.parse(sessionStorage.getItem('userData'));
    const addBtn = document.querySelector('#addForm button');
    document.querySelector('button[class="load"]').addEventListener('click', loadData);

    if (userData != null) {
        addBtn.disabled = false;

        document.getElementById('guest').style.display = 'none';
        document.querySelector('nav p span').textContent = userData.email;
    } else {
        document.getElementById('user').style.display = 'none';
    }

    document.getElementById('addForm').addEventListener('submit', addCatch);
})


async function addCatch(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

    try {
        if (Object.values(data).some(x => x == '')) {
            throw new Error('All fields are required!');
        }

        const res = await fetch('http://localhost:3030/data/catches', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify(data)
        });

        ev.target.reset();
        loadData();
    } catch (err) {
        alert(err.message);
    }

}

async function loadData() {
    const catchesEl = document.getElementById('catches');

    const url = 'http://localhost:3030/data/catches';
    const response = await fetch(url);
    const data = await response.json();

    catchesEl.replaceChildren();

    for (let currCatch of data) {
        const ownerId = currCatch._ownerId;
        const userId = userData.id;

        const disabledStr = ownerId != userId ? 'disabled' : '';

        const div = document.createElement('div');
        div.classList.add('catch');

        div.innerHTML = `<label>Angler</label>
<input type="text" class="angler" value="${currCatch.angler}" ${disabledStr}>
<label>Weight</label>
<input type="text" class="weight" value="${currCatch.weight}" ${disabledStr}>
<label>Species</label>
<input type="text" class="species" value="${currCatch.species}" ${disabledStr}>
<label>Location</label>
<input type="text" class="location" value="${currCatch.location}" ${disabledStr}>
<label>Bait</label>
<input type="text" class="bait" value="${currCatch.bait}" ${disabledStr}>
<label>Capture Time</label>
<input type="number" class="captureTime" value="${currCatch.captureTime}" ${disabledStr}>
<button class="update" data-id="${currCatch.id}" ${disabledStr}>Update</button>
<button class="delete" data-id="${currCatch.id}" ${disabledStr}>Delete</button>`;

        catchesEl.appendChild(div);
    }

}