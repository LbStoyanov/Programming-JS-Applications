const homeSection = document.querySelector('.home');
const loginSection = document.querySelector('.login');
const mainContent = document.querySelector('.main-content');

export function router(path){
    hideContent();

    if (path =='/') {
        
        homeSection.style.display = 'block';
    }else if (path =='/login') {
        loginSection.style.display = 'block';
    }
}

function hideContent(){
    for (const section of mainContent.children) {
        section.style.display = 'none';
    }
}