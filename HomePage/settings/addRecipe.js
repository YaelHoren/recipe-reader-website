const addForm = document.getElementById("add-form");

let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const image = document.getElementById("image").value.trim();
  const ingredients = document.getElementById("ingredients").value.trim().split("\n");
  const steps = document.getElementById("steps").value.trim().split("\n");

  recipes.push({ title, image, ingredients, steps });
  localStorage.setItem("recipes", JSON.stringify(recipes));

  alert("המתכון נוסף בהצלחה!");
  addForm.reset();
});
