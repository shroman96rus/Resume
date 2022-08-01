// let slideIndex = 1;
// showSlides(slideIndex);

document.querySelectorAll(".portfolio-item__slideshow-container").forEach(element => {
  element.querySelectorAll(".slideshow-container__mySlides")[0].classList.add("slide-visible");
});
document.querySelectorAll(".portfolio-item__dots").forEach(element => {
    element.querySelectorAll(".dots__dot")[0].classList.add("active");
  });

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slideshow-container__mySlides");
//   let dots = document.getElementsByClassName("dots__dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }


document.querySelector('.portfolio__content-flex').addEventListener('click',function(e)
{
    console.log(e.target);
    if (e.target.className.includes('slideshow-container__prev')) {
        let sliders = e.target.parentNode.querySelectorAll(".slideshow-container__mySlides");
        let dots = e.target.parentNode.querySelectorAll(".dots__dot");
        //console.log(e.currentTarget.parentNode);
        for (let i = 0; i < sliders.length; i++) {
            if (sliders[i].className.includes("slide-visible")) {
                sliders[i].classList.remove("slide-visible");
            
                if (i < 1) {
                    sliders[sliders.length-1].classList.add("slide-visible");
                    dots[sliders.length-1].classList.add('active');
                    dots[i].classList.remove('active');
                    return;
                }
                if (i > 0 && i < sliders.length) {
                    sliders[i -1].classList.add("slide-visible");
                    dots[i-1].classList.add('active');
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
                
                if (i >= sliders.length-1) {
                    sliders[0].classList.add("slide-visible");
                    dots[0].classList.add('active');
                    dots[i].classList.remove('active');
                    return;
                }
                else{
                    sliders[i+1].classList.add("slide-visible");
                    dots[i+1].classList.add('active');
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
                sliders[choiseSlider-1].classList.add("slide-visible");
                e.target.classList.add('active');
                choiseDots[i].classList.remove('active');
                return;
            }
        }
    }
});

//swiching left function
// document.querySelectorAll(".slideshow-container__prev").forEach(element => {
//   element.addEventListener("click", function(e){
//     let sliders = e.currentTarget.parentNode.querySelectorAll(".slideshow-container__mySlides");
//     //console.log(e.currentTarget.parentNode);
//     for (let i = 0; i < sliders.length; i++) {
//         if (sliders[i].className.includes("slide-visible")) {
//             sliders[i].classList.remove("slide-visible");
           
//             if (i < 1) {
//                 sliders[sliders.length-1].classList.add("slide-visible");
//                 return;
//             }
//             if (i > 0 && i < sliders.length) {
//                 sliders[i -1].classList.add("slide-visible");
//                 return;
//             }
//         } 
//     }
   
//   });
// });


// //swiching right function
// document.querySelectorAll(".slideshow-container__next").forEach(element => {
//     element.addEventListener("click", function(e){
//       let sliders = e.currentTarget.parentNode.querySelectorAll(".slideshow-container__mySlides");
//       //console.log(e.currentTarget.parentNode);
//       for (let i = 0; i < sliders.length; i++) {
//           if (sliders[i].className.includes("slide-visible")) {
//               sliders[i].classList.remove("slide-visible");
             
//               if (i >= sliders.length-1) {
//                   sliders[0].classList.add("slide-visible");
//                   return;
//               }
//               else{sliders[i+1].classList.add("slide-visible");}
//               return;
//             } 
//         }
     
//     });
//   });

//   document.querySelectorAll(".dots__dot").forEach(element => {
//     element.addEventListener("click", function(e){
//       let sliders = e.currentTarget.parentNode.parentNode.querySelectorAll(".slideshow-container__mySlides");
      
//       const choiseSlider = e.currentTarget.getAttribute("number");
//       const choiseDots = e.currentTarget.parentNode.querySelectorAll('.dots__dot');
      
//       for (let i = 0; i < sliders.length; i++) {
//           if (sliders[i].className.includes("slide-visible")) {
//               sliders[i].classList.remove("slide-visible");
//             }
//       }
//       choiseDots.forEach(element => 
//         {
//             if (element.className.includes('active')) {
//                 element.classList.remove('active');
                
//             }
//         });

//       sliders[choiseSlider-1].classList.add("slide-visible");
//       e.currentTarget.classList.add('active');
//       return;
//     });
//   });