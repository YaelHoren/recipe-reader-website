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
  window.location.href = "HomePage.html";
}

function handleSignup() {
  const username = document.getElementById("newUsername").value.trim();
  const password = document.getElementById("newPassword").value.trim();
  const users = loadUsers();

  if (!username || !password) {
    document.getElementById("error-msg").innerText = "נא למלא את כל השדות";
    return;
  }

  if (users.find(u => u.username === username)) {
    document.getElementById("error-msg").innerText = "שם משתמש כבר קיים";
    return;
  }

  const newUser = { username, password };
  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);
  goToHomePage(); 
}
