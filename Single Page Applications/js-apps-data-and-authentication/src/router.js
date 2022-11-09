import { renderLogin } from "./homaPage";

const homeSection = document.querySelector('.home');
const loginSection = document.querySelector('.login');
const mainContent = document.querySelector('.main-content');

const routers = {
    '/': renderLogin,
    //TODO OTHER PAGES RENDER

}

export function router(path){
    hideContent();
    
    const renderer = routers[path];
    renderer();

    
   /*  if (path =='/') {
        
        
    }else if (path =='/login') {
        loginSection.style.display = 'block';
    } */
}

function hideContent(){
    for (const section of mainContent.children) {
        section.style.display = 'none';
    }
}