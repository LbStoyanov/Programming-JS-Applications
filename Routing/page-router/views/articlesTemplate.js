const articlesTemplate = () =>`
    <h1>Articles</h1>
    <p>Lorem ipsum dolor sit</p>
    <p>Lorem ipsum dolor sit</p>
    <p>Lorem ipsum dolor sit</p>
    <p>Lorem ipsum dolor sit</p>
    <p>Lorem ipsum dolor sit</p>
`;

const root = document.getElementById('root');

export const articlesView = (ctx) =>{
    root.innerHTML = articlesTemplate();
};
