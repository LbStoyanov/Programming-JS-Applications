import { showView } from "./router.js";

const routes = {
    '/': homePage,
    '/login': loginPage
};

document.querySelector('nav').addEventListener('click', (e) =>{
    
    if (e.target.tagName == 'A' && e.target.href) {
        e.preventDefault();
        const url = new URL(e.target.href);

        const view = routes[url.pathname];

        if (typeof view == 'function') {
            view();
        }
    }
});

const homeSection = document.querySelector('#home-page');
const loginSection = document.querySelector('#form-login');

function homePage(){
    showView(homeSection);
}

function loginPage(){
    showView(loginSection);
}
