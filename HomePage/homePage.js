const recipes = [
  {
    title: "עוגיות חמאה עם שוקולד צ'יפס",
    image: "../images/חמאה.jpg",
    ingredients: [
  "200 גרם חמאה",
  "3 כוסות קמח תופח",
  "2/3 כוס סוכר",
  "ביצה",
  "1/2 כפית סודה לשתיה",
  "קמצוץ מלח"
],

    steps: [
  "מערבבים הכל - לשים ביד.",
  "מוסיפים:",
  "100 גרם שוקולד חלב קצוץ",
  "100 גרם שוקולד לבן חלבי קצוץ",
  "200 גרם שוקולדצ'יפס",
  "ומערבבים ויוצרים עיגולים.",
  "אופים כ־10 דקות עד שהעוגיות מוזהבות."
]

  },
  {
    title: "מאפינס תפוחים ושיבולת שועל מופחת סוכר",
    image: "../images/מאפינס.jpg",
    ingredients: [
      "2 ביצים L",
      "80 מ\"ל שמן (שליש כוס)",
      "שליש כוס סוכר חום דמררה",
      "1/3 כוס סירופ מייפל",
      "3 תפוחים מקולפים חתוכים לקוביות",
      "כוס שיבולת שועל דקה (קוואקר)",
      "140 ג' קמח רגיל (כוס)",
      "כפית קינמון",
      "כפית אבקת אפייה"
    ],
    steps: [
      "לחמם תנור ל־180 מעלות ולשמן תבנית שקעים עם ספריי שמן.",
      "בעזרת מטרפה לטרוף ביצים, סוכר וסירופ מייפל במשך כמה שניות. להוסיף את השמן וקוביות התפוחים, לערבב ולהוסיף את הקמח, שיבולת שועל, אבקת אפייה ולערבב לתערובת אחידה.",
      "למלא את השקעים ולאפות כ־25 דקות. מומלץ לנעוץ קיסם במרכז המאפינס ולוודא שהוא יוצא נקי.",
      "תנו למאפינס להתקרר ותיהנו מהריח והטעם המשגע 😊"
    ]
  },
  {
    title: "עוגת גבינה מנוקדת",
    image: "../images/עוגת גבינה מנוקדת.jpg",
    ingredients: [
      "750 ג' גבינה לבנה 5%",
      "200 ג' שמנת חמוצה",
      "150 ג' יוגורט במתיקות מעודנת",
      "250 ג' סוכר (כוס ורבע)",
      "140 ג' קמח (כוס)",
      "40 ג' אינסטנט פודינג וניל (2 כפות)",
      "3 ביצים גדולות",
      "2 כפות שטוחות אבקת קקאו"
    ],
    steps: [
      "לחמם תנור ל־180 מעלות",
      "לערבב את הגבינה, היוגורט, השמנת והסוכר",
      "להוסיף את הביצים, הקמח ואינסטנט וניל ולערבב לבלילה אחידה",
      "להוציא כ־4–6 כפות בלילה, לערבב עם הקקאו ולשמור בצד",
      "לשטח את הבלילה הבהירה בתבנית, לזלף את הכהה כנקודות מעל",
      "לאפות כ־40 דקות עד שהעוגה מתייצבת",
      "לקרר כמה שעות לפני שחותכים – עדיף להכין יום מראש"
    ]
  },
  {
    title: "עוגת מייפל רכה ועסיסית ירקות",
    image: "../images/עוגת מייפל.jpg",
    ingredients: [
      "3 ביצים גדולות / 4 ביצים L",
      "200 ג' סוכר (כוס)",
      "180 מ\"ל שמן (3/4 כוס)",
      "240 מ\"ל תה (כוס)",
      "כפית קינמון",
      "כפית שטוחה אבקת סודה לשתייה",
      "280 ג' קמח (2 כוסות)",
      "2 כפיות אבקת אפייה",
      "סירופ מייפל (לקישוט / לציפוי)"
    ],
    steps: [
      "להכין כוס תה כמו שאוהבים, להשאיר את התיון 5 דקות, להוציא ולקרר את התה 15 דקות",
      "לחמם תנור ל־180 מעלות",
      "במיקסר (או ידנית) לערבב ביצים, סוכר, תה, שמן ואז את שאר המצרכים עד לקבלת בלילה נוזלית ואחידה",
      "להעביר לתבנית משומנת ולאפות כ־45–50 דקות או עד שקיסם יוצא יבש",
      "כשהעוגה יוצאת מהתנור, להזליף עליה כחצי כוס סירופ מייפל בנדיבות"
    ]
  }
];

let isSpeaking = false;
let stopRequested = false;

function openModal(index) {
  const recipe = recipes[index];

  // איפוס מצב הקראה
  speechSynthesis.cancel();
  isSpeaking = false;
  stopRequested = false;

  document.getElementById("modal-title").innerText = recipe.title;
  document.getElementById("modal-image").src = recipe.image;

  const ingredientsList = document.getElementById("modal-ingredients");
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientsList.appendChild(li);
  });

  const stepsList = document.getElementById("modal-steps");
  stepsList.innerHTML = "";
  recipe.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsList.appendChild(li);
  });

  // כפתורי הקראה עם תמונות
  const buttonsDiv = document.getElementById("read-buttons");
  buttonsDiv.innerHTML = `
    <img src="../images/play.png" id="play-btn" class="icon-button" alt="Play" />
    <img src="../images/pause.png" id="pause-btn" class="icon-button" alt="Pause" style="display: none;" />
    <img src="../images/restart.png" id="restart-btn" class="icon-button" alt="Restart" />
  `;

  const playBtn = document.getElementById("play-btn");
  const pauseBtn = document.getElementById("pause-btn");
  const restartBtn = document.getElementById("restart-btn");

  playBtn.onclick = () => {
    const combinedSteps = [
      `שם המתכון: ${recipe.title}`,
      "המצרכים הם:",
      ...recipe.ingredients,
      "הוראות ההכנה:",
      ...recipe.steps
    ];

    if (!isSpeaking) {
      speakSteps(combinedSteps);
      playBtn.style.display = "none";
      pauseBtn.style.display = "inline-block";
    } else {
      speechSynthesis.resume();
      playBtn.style.display = "none";
      pauseBtn.style.display = "inline-block";
    }
  };

  pauseBtn.onclick = () => {
    speechSynthesis.pause();
    playBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
  };

  restartBtn.onclick = () => {
    const combinedSteps = [
      `שם המתכון: ${recipe.title}`,
      "המצרכים הם:",
      ...recipe.ingredients,
      "הוראות ההכנה:",
      ...recipe.steps
    ];

    speakSteps(combinedSteps, true);
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
  };

  // לפתוח את המודאל
  document.getElementById("recipe-modal").style.display = "block";
}

function closeModal() {
  stopSpeaking();
  speechSynthesis.cancel();
  isSpeaking = false;
  stopRequested = false;
  document.getElementById("recipe-modal").style.display = "none";
}

function speakSteps(steps, restart = false) {
  if (restart) {
    speechSynthesis.cancel();
  }
  isSpeaking = true;
  stopRequested = false;

  let index = 0;

  function speakNext() {
    if (stopRequested || index >= steps.length) {
      isSpeaking = false;
      return;
    }

    const utterance = new SpeechSynthesisUtterance(steps[index]);
    utterance.lang = "he-IL";
    utterance.onend = () => {
      index++;
      if (!stopRequested) speakNext();
    };
    speechSynthesis.speak(utterance);
  }

  speakNext();
}

function stopSpeaking() {
  stopRequested = true;
  speechSynthesis.cancel();
}
