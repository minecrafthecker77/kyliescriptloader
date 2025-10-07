document.addEventListener('DOMContentLoaded', function () {
  const pw = document.querySelector('.pw');
  const user = document.querySelector('.user');
  const loginForm = document.querySelector('#login-form');

  if (!pw || !user || !loginForm) {
    return;
  }

  function logLoginAttempt(username, success) {
    let loginAttempts = JSON.parse(localStorage.getItem('loginAttempts')) || [];
    loginAttempts.push({
      username: username,
      timestamp: new Date().toLocaleString(),
      success: success,
    });
    localStorage.setItem('loginAttempts', JSON.stringify(loginAttempts));
  }

  function dashboard(event) {
    event.preventDefault(); // Prevent form submission
    const username = user.value.trim();
    const password = pw.value.trim();

    if (username === '' || password === '') {
      showNotification('Please enter both a username and password.', 'error');
      logLoginAttempt(username, false);
    } else {
      // In a real application, you would send the username and password to the server for validation.
      // For this example, we will just set a session storage item to indicate that the user is logged in.

      // Update the current user's username in local storage
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser) {
        currentUser.username = username;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }

      sessionStorage.setItem('isLoggedIn', 'true');
      logLoginAttempt(username, true);
      showNotification('Login successful!', 'success');
      window.location.href = '../dashboard/';
    }
  }

  loginForm.addEventListener('submit', dashboard);
});
