function loadNav() {
  const navHTML = `
    <nav id="main-nav">
      <a href="./HomePage.html">דף הבית</a>
      <a href="./HomePage/showAll.html">📖 הצג את כל המתכונים</a>
      <a href="../LogIn+SignUp/login.html">🔐 התחברות</a>
      <a href="../LogIn+SignUp/signUp.html">📝 הרשמה</a>
      <a href="../HomePage/about.html">ℹ️ אודות</a>
      <span id="admin-link-container"></span>
    </nav>
  `;
  document.getElementById("nav-container").innerHTML = navHTML;
  if (typeof showAdminNavIfNeeded === "function") showAdminNavIfNeeded();
}
