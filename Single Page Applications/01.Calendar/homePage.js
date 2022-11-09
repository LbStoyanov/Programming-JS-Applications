const allSections = Array.from(document.getElementsByTagName('section'));

export function renderHomePage(){
    
    allSections.forEach(element => {
        element.style.display = 'none';
    });

    allSections[0].style.display = 'block';
}