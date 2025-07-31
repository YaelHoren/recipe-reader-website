const ADMIN_SECRET = "admin123"; // שנה את זה לפי הצורך

function loadUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function setCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

function goToHomePage() {
  window.location.href = "../HomePage/HomePage.html";
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const users = loadUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    setCurrentUser(user);
    goToHomePage();
  } else {
    document.getElementById("error-msg").innerText = "משתמש או סיסמה שגויים";
  }
}

function toggleAdminPassword() {
  const isChecked = document.getElementById("isAdminCheckbox").checked;
  document.getElementById("adminPasswordContainer").style.display = isChecked ? "block" : "none";
}

function handleSignup() {
  const username = document.getElementById("newUsername").value.trim();
  const password = document.getElementById("newPassword").value;
  const isAdminChecked = document.getElementById("isAdminCheckbox").checked;
  const enteredAdminPassword = document.getElementById("adminSecret").value;

  if (!username || !password) {
    document.getElementById("error-msg").textContent = "נא למלא את כל השדות";
    return;
  }

  let isAdmin = false;
  if (isAdminChecked) {
    if (enteredAdminPassword !== ADMIN_SECRET) {
      document.getElementById("error-msg").textContent = "סיסמת האדמין שגויה";
      return;
    }
    isAdmin = true;
  }

  const users = loadUsers();
  if (users.find(u => u.username === username)) {
    document.getElementById("error-msg").textContent = "המשתמש כבר קיים";
    return;
  }

  const newUser = { username, password, isAdmin };
  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);
  goToHomePage();
}
