import { e } from '../dom.js'
import { getAllIdeas } from '../api/data.js'

const section = document.getElementById('dashboard-holder');
section.remove();

export async function showCatalogPage(ctx) {
    ctx.showView(section);
    loadIdeas();    
}

async function loadIdeas() {
    const ideas = await getAllIdeas();

    const fragment = document.createDocumentFragment();

    if (ideas.count != 0) {
        ideas.map(createIdeaCard).forEach(i => fragment.appendChild(i));

        section.replaceChildren(fragment);
    } else {
        section.appendChild(e('h1', {}, 'No ideas yet! Be the first one :)'));
    }
}

function createIdeaCard(idea) {
    const ideaEl = e('div', { className: 'card overflow-hidden current-card details' });
    ideaEl.style.width = '20rem';
    ideaEl.style.height = '18rem';

    ideaEl.innerHTML = `<div class="card-body">
<p class="card-text">${idea.title}</p>
</div>
<img class="card-image" src="${idea.img}" alt="Card image cap">
<a data-id="${idea._id}" class="btn" href="">Details</a>`;

    return ideaEl;
}
