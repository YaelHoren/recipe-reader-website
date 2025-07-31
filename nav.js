function loadNav() {
  const navHTML = `
    <nav id="main-nav">
      <a href="./HomePage.html">דף הבית</a>
      <a href="./HomePage/showAll.html">📖 הצג את כל המתכונים</a>
      <a href="../LogIn+SignUp/login.html" id="login-link">🔐 התחברות</a>
      <a href="../LogIn+SignUp/signUp.html" id="signup-link">📝 הרשמה</a>
      <a href="../HomePage/about.html">ℹ️ אודותינו</a>
      <span id="admin-link-container"></span>
      <button id="logout-btn" style="display:none; margin-left:10px; padding: 6px 12px; border-radius: 6px; border:none; cursor:pointer; background:#f44336; color:white;">התנתק</button>
    </nav>
  `;
  document.getElementById("nav-container").innerHTML = navHTML;

  const currentUser = localStorage.getItem("currentUser");
  const logoutBtn = document.getElementById("logout-btn");
  const loginLink = document.getElementById("login-link");
  const signupLink = document.getElementById("signup-link");

  if (currentUser) {
    // משתמש מחובר - מציג כפתור התנתקות, מסתיר התחברות והרשמה
    logoutBtn.style.display = "inline-block";
    if (loginLink) loginLink.style.display = "none";
    if (signupLink) signupLink.style.display = "none";
  } else {
    // משתמש לא מחובר - מסתיר כפתור התנתקות, מציג התחברות והרשמה
    logoutBtn.style.display = "none";
    if (loginLink) loginLink.style.display = "inline";
    if (signupLink) signupLink.style.display = "inline";
  }

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser"); // הוצאת המשתמש הנוכחי מהמערכת
    window.location.href = "../HomePage/HomePage.html"; // מעבר לדף הבית
  });

  if (typeof showAdminNavIfNeeded === "function") showAdminNavIfNeeded();
}
