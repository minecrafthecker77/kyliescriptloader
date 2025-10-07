document.addEventListener('DOMContentLoaded', function () {
  let likeCount = 0;
  const likeButton = document.getElementById('likes');


  if (likeButton) {
    likeButton.addEventListener('click', () => {
      likeCount++;
      likeButton.innerHTML = `<p>Likes: ${likeCount} <em>Click on it to like!</em></p>`;
    });
  }
});
