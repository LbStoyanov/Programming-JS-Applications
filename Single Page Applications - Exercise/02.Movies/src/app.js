import { showView } from "./router.js";

const routes = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logOutPage,
    '/02.Movies/register': registerPage,
    '/create': createPage,
    '/details': detailPage,
    '/edit': editPage,
};

document.querySelector('nav').addEventListener('click', onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click',onNavigate);

function onNavigate(e){
    if (e.target.tagName == 'A' && e.target.href) {
        e.preventDefault();
        const url = new URL(e.target.href);

        const view = routes[url.pathname];

        if (typeof view == 'function') {
            view();
        }
    }
}

const homeSection = document.querySelector('#home-page');
const loginSection = document.querySelector('#form-login');
const registerSection = document.querySelector('#form-sign-up');
const createSection = document.querySelector('#add-movie');
const detailsSection = document.querySelector('#movie-example');
const editSection = document.querySelector('#edit-movie');

function homePage(){
    showView(homeSection);
}

function loginPage(){
    showView(loginSection);
}

function logOutPage(){

}

function registerPage(){
    showView(registerSection);
}

function createPage(){
    showView(createSection);
}

function detailPage(){
    showView(detailsSection);
}

function editPage(){
    showView(editSection);
}

homePage();
