function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', load);
    document.getElementById('btnCreate').addEventListener('click', create);
}

const phonebookEl = document.getElementById('phonebook');
const personEl = document.getElementById('person');
const phoneEl = document.getElementById('phone');

attachEvents();

async function load() {
    phonebookEl.textContent = 'Loading...';

    const phonebook = await getPhonebook();

    phonebookEl.textContent = '';

    for (const phoneId in phonebook) {
        const phoneData = phonebook[phoneId];
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.addEventListener('click', () => deletePhone(phoneId))

        li.textContent = `${phoneData.person}: ${phoneData.phone}`;
        li.appendChild(btn);

        phonebookEl.appendChild(li);
    }
}

async function getPhonebook() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function create() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const person = personEl.value;
    const phone = phoneEl.value;

    const phoneData = {
        person,
        phone
    }

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(phoneData)
    }

    const response = await fetch(url, options);

    load();
}

async function deletePhone(id) {
    const url = `http://localhost:3030/jsonstore/phonebook/${id}`;

    const options = {
        method: 'delete',
    }

    phonebookEl.textContent = 'Loading...';

    const response = await fetch(url, options);

    load();
}