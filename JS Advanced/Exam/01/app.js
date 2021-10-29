window.addEventListener('load', solve);

function solve() {
    const fieldsEl = Array.from(document.querySelectorAll('div.container-text input'));
    const addBtn = document.getElementById('add-btn');
    const hitsDiv = Array.from(document.getElementsByClassName('all-hits-container'))[0];
    const savedHitsDiv = Array.from(document.getElementsByClassName('saved-container'))[0];
    const likesDiv = Array.from(document.getElementsByClassName('likes'))[0];
    addBtn.addEventListener('click', add);

    function add(ev) {
        ev.preventDefault();

        if (!fieldsEl.some(f => f.value == '')) {
            const genre = fieldsEl[0].value.trim();
            const name = fieldsEl[1].value.trim();
            const author = fieldsEl[2].value.trim();
            const date = fieldsEl[3].value.trim();

            const saveBtn = document.createElement('button');
            saveBtn.classList.add('save-btn');
            saveBtn.textContent = 'Save song';
            saveBtn.addEventListener('click', save);

            const likeBtn = document.createElement('button');
            likeBtn.classList.add('like-btn');
            likeBtn.textContent = 'Like song';
            likeBtn.addEventListener('click', like);

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteSong);

            const song = e('div', { classList: 'hits-info' },
                e('img', { src: './static/img/img.png' }),
                e('h2', { textContent: `Genre: ${genre}` }),
                e('h2', { textContent: `Name: ${name}` }),
                e('h2', { textContent: `Author: ${author}` }),
                e('h3', { textContent: `Date: ${date}` }),
                saveBtn,
                likeBtn,
                deleteBtn
            );

            hitsDiv.appendChild(song);

            fieldsEl.forEach(f => f.value = '');

            function like(ev) {
                let currLikesText = Array.from(likesDiv.getElementsByTagName('p'))[0].textContent;

                let number = Number(currLikesText.replace('Total Likes: ', ''));
                number++;

                Array.from(likesDiv.getElementsByTagName('p'))[0].textContent = `Total Likes: ${number}`;

                likeBtn.disabled = true;
            }

            function save(ev) {
                const currSong = ev.target.parentNode;
                savedHitsDiv.appendChild(currSong);

                const currSave = currSong.getElementsByClassName('save-btn')[0];
                const currLike = currSong.getElementsByClassName('like-btn')[0];
                currSave.remove();
                currLike.remove();
            }

            function deleteSong(ev) {
                const currSong = ev.target.parentNode;
                currSong.remove();
            }
        }
    }

    function e(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }

        for (let nestedEl of content) {
            if (typeof nestedEl == 'string' || typeof nestedEl == 'number') {
                nestedEl = document.createTextNode(nestedEl);
            }
            element.appendChild(nestedEl);
        }

        return element;
    }
}