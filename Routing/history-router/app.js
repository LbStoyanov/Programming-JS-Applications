

const homeTemplate = () => `
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet</p>
`;

const articlesTemplate = () =>`
    <h1>Articles</h1>
    <p>Lorem ipsum dolor sit</p>
    <p>Lorem ipsum dolor sit</p>
    <p>Lorem ipsum dolor sit</p>
    <p>Lorem ipsum dolor sit</p>
    <p>Lorem ipsum dolor sit</p>
`;

const aboutTemplate = ()=>`
    <h1>About</h1>
    <p>Lorem ipsum dolor sit</p>
`;

const routes = {
    '/home': homeTemplate,
    '/articles': articlesTemplate,
    '/about': aboutTemplate,
}

const root = document.getElementById('root');

document.body.addEventListener('click', (e) =>{
    if (e.target.tagName === 'A') {
        e.preventDefault();

        let url = new URL(e.target.href);

        history.pushState({}, '', url.pathname);
        let template = routes[url.pathname];
        root.innerHTML = template(); 
        
    }
});