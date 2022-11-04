const baseUrl = "http://localhost:3030";

window.addEventListener("load", () => {
  fetch(`${baseUrl}/jsonstore/cookbook/recipes`)
    .then((res) => res.json())
    .then((recipes) => {
      renderRecipes(Object.values(recipes));
    });
});

function renderRecipes(recipes) {
  const mainElemenet = document.querySelector("main");
  mainElemenet.innerHTML = '';

  recipes.array.forEach(x => {
    mainElemenet.appendChild(createRecipe(x));
  });

  
}

function createRecipe(recipe) {
  let recipeElement = document.createElement("article");

  recipeElement.classList.add("preview");

  ///Worse approach, but just for demo!!!!XSS WARNING!!!
  recipeElement.innerHTML = `
        <div class="title">
            <h2>${recipe.name}</h2>
        </div>
        <div class="small">
            <img src="${recipe.img}">
        </div>
        `;

        return recipeElement;
}
