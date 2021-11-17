function attachEvents() {
    document.getElementById('submit').addEventListener('click', submitMsg);
    document.getElementById('refresh').addEventListener('click', displayMsgs);
    document.getElementById('clearMsg').addEventListener('click', () => { textareaEl.value = ''; });

    displayMsgs();
}

const textareaEl = document.getElementById('messages');
const authorEl = document.querySelector('input[name="author"]');
const contentEl = document.querySelector('input[name="content"]');

attachEvents();

async function displayMsgs() {
    textareaEl.value = 'Loading...';

    const messagesArr = await getMessages();

    textareaEl.value = '';

    messagesArr.forEach(m => textareaEl.value += `${m.author}: ${m.content}\n`);
}

async function submitMsg() {
    const author = authorEl.value;
    const content = contentEl.value;

    contentEl.value = '';

    //display message
    textareaEl.value += `${author}: ${content}\n`;

    //create message
    const message = {
        author,
        content
    };

    await createMessage(message);
}

async function createMessage(message) {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    };

    const url = 'http://localhost:3030/jsonstore/messenger';

    await fetch(url, options);
}

async function getMessages() {
    const url = 'http://localhost:3030/jsonstore/messenger';

    const response = await fetch(url);
    const data = await response.json();

    const messages = Object.values(data);

    return messages;
}