import { e } from '../dom.js'

let ctx = null;

const section = document.getElementById('homePage');

section.remove();

section.querySelector('#getStartedLink').addEventListener('click', (ev) => { 
    ev.preventDefault();
    ctx.goTo('catalog');
});

export async function showHomePage(ctxTarget) {
    ctx = ctxTarget;

    ctx.showView(section);
}