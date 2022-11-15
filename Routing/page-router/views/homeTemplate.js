const homeTemplate = () => `
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet</p>
`;

const root = document.getElementById('root');

export const homeView = (ctx) =>{
    root.innerHTML = homeTemplate();
};