// let slideIndex = 1;
// showSlides(slideIndex);

document.querySelectorAll(".portfolio-item__slideshow-container").forEach(element => {
  element.querySelectorAll(".slideshow-container__mySlides")[0].classList.remove("slide-high");
  console.log(element.querySelectorAll(".slideshow-container__mySlides"))
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow-container__mySlides");
  let dots = document.getElementsByClassName("dots__dot");
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


document.querySelectorAll(".slideshow-container__prev").forEach(element => {
  element.addEventListener("click", function(e){
    console.log(e.currentTarget.parentNode);
  });
});