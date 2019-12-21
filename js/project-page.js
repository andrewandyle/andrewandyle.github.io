// smooth scrolling for navbar links
var scroll = new SmoothScroll('a[href*="#"]', {
  easing: "easeOutQuint",
  offset: 75,
  speed: 100
});

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("sidebar").style.width = "420px";
  document.getElementById("main").style.marginLeft = "420px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
