document.addEventListener('DOMContentLoaded', function () {
  const savedWallpaper = localStorage.getItem('customWallpaper');
  if (savedWallpaper) {
    document.body.style.backgroundImage = `url(${savedWallpaper})`;
  }
});