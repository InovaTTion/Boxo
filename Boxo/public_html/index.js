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
    setTimeout(showSlides, 12000);
}

/*FRONT/COVER PAGE SLIDES FOR SMALLER DEVICES*/
let slideIndex1 = 0;
showSlides1();

function showSlides1() {
    let i;
    let slides = document.getElementsByClassName("frontPicSlides1");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex1++;
    if(slideIndex1 > slides.length) {slideIndex1 = 1}

    slides[slideIndex1-1].style.display = "block";
    setTimeout(showSlides1, 12000);
}

/*FRONT/COVER PAGE SLIDES FOR SMALLER DEVICES*/
let slideIndex2 = 0;
showSlides2();

function showSlides2() {
    let i;
    let slides = document.getElementsByClassName("frontPicSlides2");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if(slideIndex2 > slides.length) {slideIndex2 = 1}

    slides[slideIndex2-1].style.display = "block";
    setTimeout(showSlides2, 12000);
}

/*PARTNERS CAROUSEL*/
$("#carouselID").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 5,
    mouseDrag: true,
    responsiveClass: true,

    responsive: {
        0: {
            items: 2,
        },
        281: {
            items: 2,
        },
        321: {
            items: 4,
        },
        481: {
            items: 5,
        }
    }
});

/*CAROUSEL BLOG*/
$(".blogTopDiv").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 3,
    mouseDrag: true,
    responsiveClass: true,

    responsive: {
        0: {
            items: 1,
        },
        281: {
            items: 3,
        }
    }
});

/*DROPDOWN MENU FOR MEDIA QUERIES*/
function dropdownMenu() {
    var ddMenu = document.getElementById("idDropdownMenu");
    
    if(ddMenu.style.display == "block") {
        ddMenu.style.display = "none";
    } else {
        ddMenu.style.display = "block";
    }
}


