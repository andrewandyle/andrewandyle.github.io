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


// slideshow for personal life
const _C = document.querySelector('.personal-slideshow'),
      N = _C.children.length;

_C.style.setProperty('--n', N)

let x0 = null;

let locked = false;

function lock(e) {
  x0 = unify(e).clientX;
  _C.classList.toggle('smooth', !(locked = true))
};

let i = 0;

let w;

function size() { w = window.innerWidth };

function move(e) {
  if(locked) {
    let dx = unify(e).clientX - x0, s = Math.sign(dx),
        f = +(s*dx/w).toFixed(2);

    if((i > 0 || s < 0) && (i < N - 1 || s > 0) && f > .2) {
      _C.style.setProperty('--i', i -= s);
      f = 1 - f
    }

    _C.style.setProperty('--tx', '0px');
    _C.style.setProperty('--f', f);
    _C.classList.toggle('smooth', !(locked = false));
    x0 = null

    var dots = document.getElementsByClassName("dot");
    for (var j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }
    dots[i].className += " active";
  }
};

function currentSlide(n) {
  var prev = i;
  var diff = n - prev;
  if (n >= 0 && n <= N - 1) {
    _C.style.setProperty('--i', i += diff);
  }
  var dots = document.getElementsByClassName("dot");
  for (var j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active", "");
  }
  dots[i].className += " active";

}

function plusSlides(n) {
  if ((i > 0 && i < N - 1) || (i == 0 && n == 1) || (i == N - 1 && n == -1)) {
    _C.style.setProperty('--i', i += n);
  }

  var dots = document.getElementsByClassName("dot");
  for (var j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active", "");
  }
  dots[i].className += " active";
}

size();

addEventListener('resize', size, false);

_C.addEventListener('mousedown', lock, false);
_C.addEventListener('touchstart', lock, false);

_C.addEventListener('mouseup', move, false);
_C.addEventListener('touchend', move, false);

// Temporarily removed to test scrolling
// function drag(e) {
//   e.preventDefault();
//
//   if(locked)
//     _C.style.setProperty('--tx', `${Math.round(unify(e).clientX - x0)}px`)
// };
//
// _C.addEventListener('mousemove', drag, false);
// _C.addEventListener('touchmove', drag, false);

function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };
