function attachEvents() {
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostBtn = document.getElementById('btnViewPost');

    loadPostsBtn.addEventListener('click', getPosts);
    viewPostBtn.addEventListener('click', displayPost);
}

async function displayPost() {
    const postId = document.getElementById('posts').value;

    const postTitleEl = document.getElementById('post-title');
    const postBodyEl = document.getElementById('post-body');
    const commentsUl = document.getElementById('post-comments');

    document.querySelector('body h2').textContent = '';
    postTitleEl.textContent = 'Loading...';
    postBodyEl.textContent = '';
    commentsUl.replaceChildren();
    
    const [post, comments] = await Promise.all([
        getPostById(postId),
        getCommentsById(postId)
    ]);
    
    commentsUl.replaceChildren();

    postTitleEl.textContent = post.title;
    postBodyEl.textContent = post.body;

    comments.forEach(c => {
        const li = document.createElement('li');

        li.textContent = c.text;

        commentsUl.appendChild(li);
    });
}

async function getPosts() {
    const url = 'http://localhost:3030/jsonstore/blog/posts';

    const res = await fetch(url);
    const data = await res.json();

    const selectEl = document.getElementById('posts');

    selectEl.replaceChildren();

    Object.values(data).forEach(post => {
        const option = document.createElement('option');
        option.value = post.id;
        option.textContent = post.title;

        selectEl.appendChild(option);
    });
}

async function getCommentsById(postId) {
    const url = 'http://localhost:3030/jsonstore/blog/comments';

    const res = await fetch(url);
    const data = await res.json();

    const comments = Object.values(data).filter(c => c.postId == postId);

    return comments;
}

async function getPostById(postId) {
    const url = 'http://localhost:3030/jsonstore/blog/posts/' + postId;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

attachEvents();