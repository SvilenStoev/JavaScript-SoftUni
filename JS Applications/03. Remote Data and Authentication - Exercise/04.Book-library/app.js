function addEventListener() {
    document.getElementById('loadBooks').addEventListener('click', load);
    document.querySelector('#createForm button').addEventListener('click', createBook);
}

addEventListener();

const tbodyEl = document.querySelector('table tbody');
const headerEl = document.querySelector('h3');
const createForm = document.getElementById('createForm');
const editForm = document.getElementById('editForm');

load();

async function createBook(ev) {
    ev.preventDefault();

    const title = document.querySelector('form input[name="title"]').value;
    const author = document.querySelector('form input[name="author"]').value;

    try {
        if (title == '' || author == '') {
            throw new Error('Invalid input!');
        }

        const book = {
            title,
            author
        };

        const result = await saveBook(book);

        if (result == undefined) {
            throw new Error('Somethings wrong!');
        }

        const bookRow = createBookRow(book, result._id);
        tbodyEl.appendChild(bookRow);

        document.querySelectorAll('form input').forEach(i => i.value = '');

    } catch (error) {
        headerEl.textContent = error.message;
    }
}

async function saveBook(book) {
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const options = {
        method: 'post',
        headers:
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    }

    const data = await request(url, options);

    return data;
}

async function load() {
    createForm.style.display = 'block';
    editForm.style.display = 'none';

    const books = await getBooks();

    tbodyEl.replaceChildren();

    for (const bookId in books) {
        const book = books[bookId];
        const bookRow = createBookRow(book, bookId);

        tbodyEl.appendChild(bookRow);
    }
}

async function getBooks() {
    const data = await request('http://localhost:3030/jsonstore/collections/books');

    return data;
}

function createBookRow(book, id) {
    const tr = document.createElement('tr');
    const title = book.title;
    const author = book.author;

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td1.textContent = title;
    td2.textContent = author;
    td3.dataset.id = id;

    const edit = document.createElement('button');
    edit.addEventListener('click', editBook)
    edit.textContent = 'Edit';

    const del = document.createElement('button');
    del.addEventListener('click', deleteBook)
    del.textContent = 'Delete';

    td3.appendChild(edit);
    td3.appendChild(del);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    return tr;
}

async function editBook(ev) {
    const id = ev.target.parentNode.dataset.id;

    createForm.style.display = 'none';
    editForm.style.display = 'block';

    const title = document.querySelector('#editForm input[name="title"]');
    const author = document.querySelector('#editForm input[name="author"]');

    const book = await getBookById(id);

    title.value = book.title;
    author.value = book.author;

    document.querySelector('#editForm button').addEventListener('click', saveEditedBook);

    async function saveEditedBook(ev) {
        ev.preventDefault();

        tbodyEl.textContent = 'Loading...';

        const title = document.querySelector('#editForm input[name="title"]').value;
        const author = document.querySelector('#editForm input[name="author"]').value;

        const book = { title, author };

        const url = 'http://localhost:3030/jsonstore/collections/books/' + id;
        const options = {
            method: 'put',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        }

        load();

        const response = await fetch(url, options);

        tbodyEl.textContent = '';
    }
}

async function deleteBook(ev) {
    const id = ev.target.parentNode.dataset.id;
    const url = 'http://localhost:3030/jsonstore/collections/books/' + id;
    const options = {
        method: 'delete'
    }

    const response = await fetch(url, options);

    ev.target.parentNode.parentNode.remove();
}

async function request(url, options) {
    const response = await fetch(url, options);

    if (response.ok != true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    const data = await response.json();

    return data
}

async function getBookById(id) {
    const url = 'http://localhost:3030/jsonstore/collections/books/' + id;
    const data = await request(url);

    return data;
}