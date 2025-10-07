document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('register-form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');

  if (!registerForm || !usernameInput || !passwordInput || !confirmPasswordInput) {
    return;
  }

  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (username === '' || password === '' || confirmPassword === '') {
      showNotification('Please fill in all fields.', 'error');
      return;
    }

    if (password !== confirmPassword) {
      showNotification('Passwords do not match.', 'error');
      return;
    }

    // In a real application, you would send the registration data to a server.
    // For this example, we'll store the user data in local storage.
    const newUser = {
      username: username,
      email: '' // Email can be added later in the account settings
    };
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    showNotification('Registration successful! Please log in.', 'success');
    window.location.href = '../login/';
  });
});