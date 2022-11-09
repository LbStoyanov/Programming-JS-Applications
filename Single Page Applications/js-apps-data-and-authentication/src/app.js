import {router} from './router.js';

const guestNavigation = document.getElementById('guest');
const userNavigation  = document.getElementById('user');
guestNavigation.style.display = 'inline';
userNavigation.style.display = 'inline';

const navElement = document.querySelector('.navigation');
navElement.addEventListener('click', (e) =>{
    e.preventDefault();
    if (e.target.tagName == 'A') {
        let url = new URL(e.target.href);
        router(url.pathname);
    }
})
