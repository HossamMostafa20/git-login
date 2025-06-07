function register() {
  var email = document.getElementById('regEmail').value;
  var password = document.getElementById('regPassword').value;
  var msg = document.getElementById('regMsg');

  if (!validateEmail(email)) {
    msg.innerText = "Invalid email ❌";
    return;
  }

  if (localStorage.getItem(email)) {
    msg.innerText = "Email already registered ❌";
    return;
  }

  localStorage.setItem(email, password);
  localStorage.setItem('currentUser', email);
  window.location.href = "login.html";
}

function login() {
  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;
  var msg = document.getElementById('loginMsg');

  var storedPassword = localStorage.getItem(email);
  if (!storedPassword) {
    msg.innerText = "Email not registered ❌";
  } else if (storedPassword !== password) {
    msg.innerText = "Incorrect password ❌";
  } else {
    localStorage.setItem('currentUser', email);
    window.location.href = "home.html";
  }
}

function loadHome() {
  var user = localStorage.getItem('currentUser');
  if (!user) {
    window.location.href = "login.html";
  } else {
    document.getElementById('welcomeMsg').innerText = `Welcome, ${user}`;
  }
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = "login.html";
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
