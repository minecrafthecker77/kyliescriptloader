var mainElement = document.body;
var mainHeading = document.getElementById(".head");
document.addEventListener("DOMContentLoaded", function() {
  mainElement.animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(100px)' }
  ], {
    duration: 1000,
    easing: 'ease-in-out'
  });
  // FIX YOUR SELECTOR GAME
  var mainHeading = document.getElementById("head"); // no dot, no dash
  // PROPER IF STATEMENT SYNTAX
  if (mainHeading) {
    mainHeading.addEventListener('mouseenter', function() {
      mainHeading.innerHTML = "hidden"; // CLOSE YOUR STRINGS
    });
  }
});
