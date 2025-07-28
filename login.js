function loadUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function setCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

function goToHomePage() {
  window.location.href = "HomePage.html";
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
