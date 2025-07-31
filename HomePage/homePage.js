const defaultRecipes = [
  {
    title: "בראוניז פרווה עם חמאת בוטנים",
    image: "../images/בראוניז.jpg",
    ingredients: [
      "150 ג' שוקולד מריר (חבילה וחצי)", 
      "150 מ\"ל שמן (קצת יותר מחצי כוס)",
      "200 ג' סוכר (כוס)", 
      "4 ביצים L", 
      "60 מ\"ל שמנת מתוקה / בישול / ריץ / צמחית (רבע כוס)",
      "2 כפות שטוחות אבקת קקאו", 
      "קורט מלח", 
      "140 ג' קמח רגיל (כוס)",
      "2 כפות גדושות חמאת בוטנים"
    ],
    steps: [
      "שוברים את השוקולד וממיסים עם שמן.",
      "מערבבים עם ביצים, שמנת, קקאו, מלח וקמח.",
      "יוצקים לתבנית, מטפטפים חמאת בוטנים, ואופים 30 דקות."
    ]
  },
  {
    title: "מאפינס תפוחים ושיבולת שועל מופחת סוכר",
    image: "../images/מאפינס.jpg",
    ingredients: [
      "2 ביצים L",
      "80 מ\"ל שמן (שליש כוס)",
      "שליש כוס סוכר חום",
      "1/3 כוס סירופ מייפל",
      "3 תפוחים חתוכים לקוביות",
      "כוס שיבולת שועל דקה",
      "140 ג' קמח רגיל",
      "כפית קינמון",
      "כפית אבקת אפייה"
    ],
    steps: [
      "לחמם תנור ולשמן תבנית שקעים.",
      "מערבבים הכל לבלילה אחידה.",
      "אופים כ־25 דקות עד שקיסם יוצא יבש."
    ]
  },
  {
    title: "עוגת גבינה מנוקדת",
    image: "../images/עוגת גבינה מנוקדת.jpg",
    ingredients: [
      "750 ג' גבינה לבנה",
      "200 ג' שמנת חמוצה",
      "150 ג' יוגורט",
      "250 ג' סוכר",
      "140 ג' קמח",
      "40 ג' אינסטנט פודינג וניל",
      "3 ביצים",
      "2 כפות אבקת קקאו"
    ],
    steps: [
      "מערבבים את כל הרכיבים (למעט הקקאו).",
      "שומרים חלק, מערבבים עם קקאו ויוצקים נקודות מעל.",
      "אופים 40 דקות ומצננים היטב."
    ]
  },
  {
    title: "עוגת מייפל רכה ועסיסית ירקות",
    image: "../images/עוגת מייפל.jpg",
    ingredients: [
      "3–4 ביצים",
      "200 ג' סוכר",
      "180 מ\"ל שמן",
      "240 מ\"ל תה",
      "כפית קינמון",
      "כפית סודה לשתייה",
      "280 ג' קמח",
      "2 כפיות אבקת אפייה",
      "סירופ מייפל לקישוט"
    ],
    steps: [
      "מכינים תה ומצננים.",
      "מערבבים את כל החומרים לבלילה.",
      "אופים כ־50 דקות ומזלפים מייפל חם."
    ]
  }
];

function loadRecipes() {
  const saved = localStorage.getItem("recipes");
  if (saved) return JSON.parse(saved);
  localStorage.setItem("recipes", JSON.stringify(defaultRecipes));
  return defaultRecipes;
}

function saveRecipes() {
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

function openModal(index) {
  const recipe = recipes[index];
  document.getElementById("modal-title").textContent = recipe.title;
  document.getElementById("modal-image").src = recipe.image;

  const ingredientsList = document.getElementById("modal-ingredients");
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach(ing => {
    const li = document.createElement("li");
    li.textContent = ing;
    ingredientsList.appendChild(li);
  });

  const stepsList = document.getElementById("modal-steps");
  stepsList.innerHTML = "";
  recipe.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsList.appendChild(li);
  });

  document.getElementById("recipe-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("recipe-modal").style.display = "none";
}

function renderRecipes() {
  const container = document.getElementById("recipe-container");
  container.innerHTML = "";
  recipes.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.onclick = () => openModal(index);
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" />
      <h3>${recipe.title}</h3>
    `;
    container.appendChild(card);
  });
}

function showAdminNavIfNeeded() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const adminLinkContainer = document.getElementById("admin-link-container");

  if (currentUser?.isAdmin) {
    const link = document.createElement("a");
    link.href = "../HomePage/settings/Settings.html";
    link.innerText = "הגדרות מערכת";
    adminLinkContainer.appendChild(link);

    
  }
}

let recipes = loadRecipes();
document.addEventListener("DOMContentLoaded", () => {
  renderRecipes();
  loadNav();
});
