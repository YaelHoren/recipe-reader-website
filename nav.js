function loadNav() {
  const currentPath = window.location.pathname;
  let prefix = '';

  // Example: if the current page is inside /HomePage/, prefix is '../'
  if (currentPath.includes('/HomePage/')) {
    prefix = '../';
  }

  // build nav with prefix
  const navHTML = `
    <nav id="main-nav">
      <a href="${prefix}HomePage/HomePage.html">דף הבית</a>
      <a href="${prefix}showAll.html">📖 הצג את כל המתכונים</a>
      <a href="${prefix}LogIn+SignUp/login.html">🔐 התחברות</a>
      <a href="${prefix}LogIn+SignUp/signUp.html">📝 הרשמה</a>
      <a href="${prefix}HomePage/about.html">ℹ️ אודות</a>
      <span id="admin-link-container"></span>
    </nav>
  `;
  document.getElementById("nav-container").innerHTML = navHTML;
  if (typeof showAdminNavIfNeeded === "function") showAdminNavIfNeeded();
}
