import { showView } from "./util.js";

const homeSection = document.querySelector('#home-page');
const catalog = homeSection.querySelector('#movie .card-deck.d-flex.justify-content-center');

export function homePage(){
    showView(homeSection);
}

function createMoviePreview(movie){
    const element = document.createElement('div');
    element.className = 'card mb-4';
    element.innerHTML = `<img class="card-img-top" src="${movie.img}"
    alt="Card image cap" width="400">
        <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
        </div>
        <div class="card-footer">
        <a data=id="#${movie._id}" href="#/details/${movie._id}">
            <button type="button" class="btn btn-info">Details</button>
        </a>
        </div>`;


        return element;
}


async function getMovies(){
    const response = await fetch('http://localhost:3030/data/movies');
    const data = await response.json();
    return data;
}