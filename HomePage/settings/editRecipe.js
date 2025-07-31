const recipesList = document.getElementById("recipes-list");
const searchInput = document.getElementById("search");
const editFormContainer = document.getElementById("edit-form-container");
const editForm = document.getElementById("edit-form");

let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
let editingIndex = null;

function renderRecipes(filter = "") {
  recipesList.innerHTML = "";
  const filtered = recipes.filter(r => r.title.includes(filter));
  filtered.forEach((recipe, index) => {
    const div = document.createElement("div");
    div.className = "recipe-item";
    const infoDiv = document.createElement("div");
    infoDiv.style.display = "flex";
    infoDiv.style.alignItems = "center";
    infoDiv.style.gap = "15px";

    const img = document.createElement("img");
    img.src = recipe.image.startsWith("http") ? recipe.image : `/images/${recipe.image.split("/").pop()}`;
    img.alt = recipe.title;

    const title = document.createElement("h3");
    title.textContent = recipe.title;

    infoDiv.appendChild(img);
    infoDiv.appendChild(title);

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️ ערוך";
editBtn.onclick = () => {
  const realIndex = recipes.findIndex(r => r.title === recipe.title && r.image === recipe.image);
  if (realIndex !== -1) {
    openEditForm(realIndex);
  }
};

    div.appendChild(infoDiv);
    div.appendChild(editBtn);

    recipesList.appendChild(div);
  });
  
  if (filtered.length === 0) {
    
    const noResult = document.createElement("div");
    noResult.textContent = " לא נמצאו מתכונים תואמים לחיפוש";
    noResult.style.color = "gray";
    noResult.style.fontSize = "1.2em";
    noResult.style.textAlign = "center";
    recipesList.appendChild(noResult);
    return;
  }
}

function openEditForm(index) {
  editingIndex = index;
  const recipe = recipes[index];
  editFormContainer.style.display = "block";
  recipesList.style.display = "none";        // הסתרת רשימת מתכונים
  searchInput.style.display = "none";        // הסתרת שורת החיפוש

  document.getElementById("edit-title").value = recipe.title;
  document.getElementById("edit-image").value = recipe.image;
  document.getElementById("edit-ingredients").value = recipe.ingredients.join("\n");
  document.getElementById("edit-steps").value = recipe.steps.join("\n");
}


editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("edit-title").value.trim();
  const image = document.getElementById("edit-image").value.trim();
  const ingredients = document.getElementById("edit-ingredients").value.trim().split("\n");
  const steps = document.getElementById("edit-steps").value.trim().split("\n");

  if (editingIndex !== null) {
    recipes[editingIndex] = { title, image, ingredients, steps };
    localStorage.setItem("recipes", JSON.stringify(recipes));
    editingIndex = null;
    editFormContainer.style.display = "none";
    renderRecipes(searchInput.value);
    recipesList.style.display = "block";
searchInput.style.display = "block";

    alert("המתכון עודכן בהצלחה!");
  }
});

document.getElementById("cancel-edit").onclick = () => {
  editingIndex = null;
  editFormContainer.style.display = "none";
  recipesList.style.display = "block";      // החזרת הרשימה
  searchInput.style.display = "block";      // החזרת שורת חיפוש
};

searchInput.addEventListener("input", () => {
  renderRecipes(searchInput.value);
});

renderRecipes();
