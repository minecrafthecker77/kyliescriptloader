document.addEventListener('DOMContentLoaded', function () {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');

  if (isLoggedIn !== 'true') {
    console.log(
      'An attempt has been made to use Kylie Script Loader without auth. If this persists, you will be blacklisted.'
    );
    window.location.href = '../login';
    return; // Stop execution if not logged in
  }

  console.log('Successful Login');

  // Function to get user data from local storage or create a default one
  function getCurrentUser() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
      user = {
        username: 'KylieUser',
        email: 'kylie@example.com',
      };
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    return user;
  }

  // Account Settings
  const dashboardUsername = document.getElementById('dashboard-username');
  const dashboardEmail = document.getElementById('dashboard-email');
  const editAccountBtn = document.getElementById('edit-account-btn');

  const currentUser = getCurrentUser();

  if (dashboardUsername) {
    dashboardUsername.textContent = currentUser.username;
  }
  if (dashboardEmail) {
    dashboardEmail.textContent = currentUser.email;
  }

  if (editAccountBtn) {
    editAccountBtn.addEventListener('click', function () {
      window.location.href = '/dashboard/account';
    });
  }

  // Wallpaper Changer
  const wallpaperUrlInput = document.getElementById('wallpaper-url');
  const setWallpaperBtn = document.getElementById('set-wallpaper-btn');
  const resetWallpaperBtn = document.getElementById('reset-wallpaper-btn');

  if (setWallpaperBtn) {
    setWallpaperBtn.addEventListener('click', function () {
      const url = wallpaperUrlInput.value.trim();
      if (url) {
        localStorage.setItem('customWallpaper', url);
        document.body.style.backgroundImage = `url(${url})`;
        showNotification('Wallpaper set successfully!', 'success');
      } else {
        showNotification('Please enter a valid image URL.', 'error');
      }
    });
  }

  if (resetWallpaperBtn) {
    resetWallpaperBtn.addEventListener('click', function () {
      localStorage.removeItem('customWallpaper');
      document.body.style.backgroundImage = ''; // Reset to default CSS
      wallpaperUrlInput.value = '';
      showNotification('Wallpaper reset to default.', 'info');
    });
  }

  // Function to load and display user stats
  function loadUserStats() {
    const uploadedScripts = JSON.parse(localStorage.getItem('uploadedScripts')) || [];

    const totalScripts = uploadedScripts.length;
    const totalLikes = uploadedScripts.reduce((sum, script) => sum + (script.likes || 0), 0);

    let mostLikedScript = 'N/A';
    if (totalScripts > 0) {
      let maxLikes = -1;
      let mostLikedScriptIndex = -1;

      uploadedScripts.forEach((script, index) => {
        if ((script.likes || 0) > maxLikes) {
          maxLikes = script.likes || 0;
          mostLikedScriptIndex = index;
        }
      });

      if (mostLikedScriptIndex !== -1) {
        mostLikedScript = `${uploadedScripts[mostLikedScriptIndex].name} (${maxLikes} likes)`;
      }
    }

    document.getElementById('total-scripts').textContent = totalScripts;
    document.getElementById('total-likes').textContent = totalLikes;
    document.getElementById('most-liked-script').textContent = mostLikedScript;
  }

  // Initial load of user stats
  loadUserStats();
});