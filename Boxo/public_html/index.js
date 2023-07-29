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

/*let slideIndexBlog = 0;
showSlidesBlog();

function showSlidesBlog() {
    let i;
    let slidesBlog = document.getElementsByClassName("bTopClass");
    for(i = 0; i < slidesBlog.length; i++) {
        slidesBlog[i].style.display = "none"
    }
    slideIndexBlog++;
    if(slideIndexBlog > slidesBlog.length) {slideIndexBlog = 1}

    slidesBlog[slideIndexBlog-1].style.display = "block";
    setTimeout(showSlidesBlog, 4000);
}*/

/*PARTNERS CAROUSEL*/
$(".carousel").owlCarousel({
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
$("#blogTopDiv").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 5,
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


