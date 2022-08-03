// let slideIndex = 1;
// showSlides(slideIndex);

document.querySelectorAll(".portfolio-item__slideshow-container").forEach(element => {
    element.querySelectorAll(".slideshow-container__mySlides")[0].classList.add("slide-visible");
});
document.querySelectorAll(".portfolio-item__dots").forEach(element => {
    element.querySelectorAll(".dots__dot")[0].classList.add("active");
});


document.querySelector('.portfolio__content-flex').addEventListener('click', function(e) {
    console.log(e);
    if (e.target.className.includes('slideshow-container__prev')) {
        let sliders = e.target.parentNode.querySelectorAll(".slideshow-container__mySlides");
        let dots = e.target.parentNode.querySelectorAll(".dots__dot");
        //console.log(e.currentTarget.parentNode);
        for (let i = 0; i < sliders.length; i++) {
            if (sliders[i].className.includes("slide-visible")) {
                sliders[i].classList.remove("slide-visible");

                if (i < 1) {
                    sliders[sliders.length - 1].classList.add("slide-visible");
                    dots[sliders.length - 1].classList.add('active');
                    dots[i].classList.remove('active');
                    return;
                }
                if (i > 0 && i < sliders.length) {
                    sliders[i - 1].classList.add("slide-visible");
                    dots[i - 1].classList.add('active');
                    dots[i].classList.remove('active');
                    return;
                }
            }
        }
    }

    if (e.target.className.includes('slideshow-container__next')) {
        let sliders = e.target.parentNode.querySelectorAll(".slideshow-container__mySlides");
        let dots = e.target.parentNode.querySelectorAll(".dots__dot");
        //console.log(e.currentTarget.parentNode);
        for (let i = 0; i < sliders.length; i++) {
            if (sliders[i].className.includes("slide-visible")) {
                sliders[i].classList.remove("slide-visible");

                if (i >= sliders.length - 1) {
                    sliders[0].classList.add("slide-visible");
                    dots[0].classList.add('active');
                    dots[i].classList.remove('active');
                    return;
                } else {
                    sliders[i + 1].classList.add("slide-visible");
                    dots[i + 1].classList.add('active');
                    dots[i].classList.remove('active');
                }
                return;
            }
        }
    }

    if (e.target.className.includes('dots__dot')) {
        let sliders = e.target.parentNode.parentNode.querySelectorAll(".slideshow-container__mySlides");
        const choiseSlider = e.target.getAttribute("number");
        const choiseDots = e.target.parentNode.querySelectorAll('.dots__dot');

        for (let i = 0; i < sliders.length; i++) {
            if (sliders[i].className.includes("slide-visible")) {
                sliders[i].classList.remove("slide-visible");
                sliders[choiseSlider - 1].classList.add("slide-visible");
                e.target.classList.add('active');
                choiseDots[i].classList.remove('active');
                return;
            }
        }
    }

    if (e.target.localName == "img") {
        document.querySelector("body").classList.add("body-block");
        document.querySelector(".image-modal").classList.add("image-modal--active");

        let gettingImages = e.target.cloneNode(true);
        console.log(gettingImages);
        let divImageModal = document.createElement("div");
        divImageModal.className = "image-modal__slideshow";
        divImageModal.append(gettingImages);
        document.querySelector(".image-modal__content").append(divImageModal);

    }


});

document.querySelector('.image-modal__wrap').addEventListener('click', function(e) {

    if (e.target.className == "image-modal__wrap" || e.target.className == "image-modal__close") {
        document.querySelector("body").classList.remove("body-block");
        document.querySelector(".image-modal").classList.remove("image-modal--active");
        document.querySelector(".image-modal__content div").remove();
    }
});