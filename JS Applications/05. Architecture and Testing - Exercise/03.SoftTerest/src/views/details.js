import { e } from '../dom.js'

const section = document.getElementById('detailsPage');
section.remove();

export async function showDetailsPage(ctx) {
    ctx.showView(section);
}