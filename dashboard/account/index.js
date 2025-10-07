document.addEventListener('DOMContentLoaded', function () {
  const accountForm = document.getElementById('account-form');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');

  // Function to get user data from local storage
  function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  // Load current user data into the form
  const currentUser = getCurrentUser();
  if (currentUser) {
    usernameInput.value = currentUser.username;
    emailInput.value = currentUser.email;
  }

  // Handle form submission
  accountForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const updatedUser = {
      username: usernameInput.value,
      email: emailInput.value,
    };

    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    // We need to include the notification script in the HTML file to use this function.
    if (typeof showNotification === 'function') {
      showNotification('Account details saved successfully!', 'success');
    }
  });
});