const aboutTemplate = ()=>`
    <h1>About</h1>
    <p>Lorem ipsum dolor sit</p>
`;

const root = document.getElementById('root');

export const aboutView = (ctx) =>{
    root.innerHTML = aboutTemplate();
};