const baseUrl = 'http://localhost:3030';

window.addEventListener('load', () =>{
    fetch(`${baseUrl}/jsonstore/cookbook/recipes`)
    .then(res => res.json())
    .then(recipes => {
        
    })
})