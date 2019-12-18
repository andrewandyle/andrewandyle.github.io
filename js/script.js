// smooth scrolling for navbar links
var scroll = new SmoothScroll('a[href*="#"]', {
  easing: "easeInOutCubic",
  offset: 75,
  speed: 500
});

// slideshow for showcase
var showcaseIndex = 0;
showcaseSlides();

function showcaseSlides() {
  var i;
  var slides = document.getElementsByClassName("showcase-img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  showcaseIndex++;
  if (showcaseIndex > slides.length) {showcaseIndex = 1}
  slides[showcaseIndex-1].style.display = "block";
  setTimeout(showcaseSlides, 8000); // Change image every 8 seconds
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("life-slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
