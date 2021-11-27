import { showView, e } from './dom.js';

const section = document.getElementById('movie-details');
const div = section.querySelector('.container');

section.remove();

export async function showDetails(id) {
    const movie = await getMovieById(id);

    section.innerHTML = `<div class="row bg-light text-dark">
    <h1>Movie title: ${movie.title}</h1>

    <div class="col-md-8">
        <img class="img-thumbnail" src="${movie.img}"
            alt="Movie">
    </div>
    <div class="col-md-4 text-center">
        <h3 class="my-3 ">Movie Description</h3>
        <p>${movie.description}</p>
        <a class="btn btn-danger" href="#">Delete</a>
        <a class="btn btn-warning" href="#">Edit</a>
        <a class="btn btn-primary" href="#">Like</a>
        <span class="enrolled-span">Liked 1</span>
    </div>
</div>`;

    showView(section);
}

async function getMovieById(id) {
    const url = 'http://localhost:3030/data/movies/' + id;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}
