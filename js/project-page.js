// smooth scrolling for navbar links
var scroll = new SmoothScroll('a[href*="#"]', {
  easing: "easeOutQuint",
  offset: 75,
  speed: 100
});

/* Set the width of the sidebar to 420px */
function openNav() {
  document.getElementById("sidebar").style.width = "420px";
}

/* Set the width of the sidebar to 0 */
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}
