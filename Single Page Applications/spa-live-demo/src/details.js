export async function showDetailsView(id){
    [...document.querySelectorAll('section')].forEach(s => s.style.display = 'none');

    const recipe = await getRecipeDetailsById(id);

    document.getElementById('details-page').style.display = 'block';

    displayRecipe(recipe);
}


 async function getRecipeDetailsById(id){
    const response = await fetch('http://localhost:3030/data/recipes/' + id);

    const recipe = await response.json();

    return recipe;
}


 function displayRecipe(recipe){
     document.getElementById('recipe-name').textContent = recipe.name;

     const ingredientsFragment = document.createElement('ul');

     for(let item of recipe.ingredients){
       
        const element = document.createElement('li');
        element.textContent = item;
        ingredientsFragment.append(item);
     }

     document.getElementById('recipe-ingredients').replaceChildren(ingredientsFragment);

     const stepsFragment = document.createElement('ul');

     for(let item of recipe.steps){
        const element = document.createElement('li');
        element.textContent = item;
        stepsFragment.append(item);
     }

     document.getElementById('recipe-steps').replaceChildren(stepsFragment);
}