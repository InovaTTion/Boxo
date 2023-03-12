/*FRONT/COVER PAGE SLIDES*/
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("frontPicSlides");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
}

/*PARTNERS CAROUSEL*/
$(".carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 5,
    mouseDrag: true
});
