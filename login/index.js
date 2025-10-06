document.addEventListener('DOMContentLoaded', function () {
  const pw = document.querySelector('.pw');
  const user = document.querySelector('.user');
  const loginForm = document.querySelector('#login-form');

  if (!pw || !user || !loginForm) {
    return;
  }

  function dashboard(event) {
    event.preventDefault(); // Prevent form submission
    if (pw.value.trim() === '' || user.value.trim() === '') {
      alert('Please enter both a username and password.');
    } else {
      // In a real application, you would send the username and password to the server for validation.
      // For this example, we will just set a session storage item to indicate that the user is logged in.
      sessionStorage.setItem('isLoggedIn', 'true');
      window.location.href = '../dashboard/';
    }
  }

  loginForm.addEventListener('submit', dashboard);
});
