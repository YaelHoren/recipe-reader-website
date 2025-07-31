const recipesList = document.getElementById("recipes-list");
const searchInput = document.getElementById("search");

let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

function renderRecipes(filter = "") {
  recipesList.innerHTML = "";
  const filtered = recipes.filter(r => r.title.includes(filter));
  filtered.forEach((recipe, index) => {
    const div = document.createElement("div");
    div.className = "recipe-item";
    div.style.border = "1px solid #ccc";
    div.style.borderRadius = "10px";
    div.style.padding = "10px";
    div.style.marginBottom = "15px";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "space-between";

    const infoDiv = document.createElement("div");
    infoDiv.style.display = "flex";
    infoDiv.style.alignItems = "center";
    infoDiv.style.gap = "15px";

    const img = document.createElement("img");
    img.src = recipe.image || "https://via.placeholder.com/80";
    img.alt = recipe.title;
    img.style.width = "80px";
    img.style.height = "80px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "8px";

    const title = document.createElement("h3");
    title.textContent = recipe.title;

    infoDiv.appendChild(img);
    infoDiv.appendChild(title);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌ מחק";
    deleteBtn.style.backgroundColor = "#e74c3c";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "8px 12px";
    deleteBtn.style.borderRadius = "8px";
    deleteBtn.style.cursor = "pointer";

   deleteBtn.onclick = () => {
  if(confirm(`אתה בטוח שברצונך למחוק את המתכון "${recipe.title}"?`)) {
    const realIndex = recipes.findIndex(r => r.title === recipe.title && r.image === recipe.image);
    if (realIndex !== -1) {
      recipes.splice(realIndex, 1);
      localStorage.setItem("recipes", JSON.stringify(recipes));
      searchInput.value = "";
      renderRecipes();
      alert("המתכון נמחק בהצלחה!");
    }
  }
};


    div.appendChild(infoDiv);
    div.appendChild(deleteBtn);

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

searchInput.addEventListener("input", () => {
  renderRecipes(searchInput.value);
});

renderRecipes();
