
export async function showCatalogView(){
    [...document.querySelectorAll('section')].forEach(s => s.style.display = 'none');
    

    const recipes = await getAllRecipes();

    document.getElementById('catalog-page').style.display = 'block';
    
    displayRecipes(recipes);
}


 async function getAllRecipes(){
    const response = await fetch('http://localhost:3030/data/recipes?select=' + encodeURIComponent('_id,name'));
    const recipes = await response.json();

    return recipes;
}

 function displayRecipes(recipes){
    const cards = recipes.map(createRecipeCard);

    const fragment = document.createDocumentFragment();

    for(let item of cards){
        fragment.appendChild(item);
    }

    const list = document.getElementById('recipes-list');
    list.replaceChildren(fragment);
}


function createRecipeCard(recipe){
    const element = document.createElement('li');
    element.textContent = recipe.name;

    return element;
}