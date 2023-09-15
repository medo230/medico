$(document).ready(function () {
    let navActive = document.getElementById("navActive");
    let navLink = navActive.getElementsByClassName("nav-link");
    let imgs = Array.from(document.querySelectorAll("#gallery img"));
    let lightBoxContainer = document.getElementById("lightBoxContainer");
    let lightBoxItem = document.getElementById("lightBoxItem");
    let nextBtn = document.getElementById("next");
    let prevBtn = document.getElementById("prev");
    let closeBtn = document.getElementById("close");
    let currentIndex = 0;

    $("#loding").fadeOut(2000, function () {

        $("body").css("overflow", "auto")
    });


    $(".navbar-nav  a[href^='#']").click(function () {
        let aHref = $(this).attr("href");
        let sectionOffset = $(aHref).offset().top;
        $("html , body").animate({ scrollTop: sectionOffset }, 2000)


    })
    $(".back-to-top").click(function () {

        $("html , body").animate({ scrollTop: 0 }, 2500)
    })
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
    let featuredServicesOffsetTop = $(".featured-services").offset().top;
    $(window).scroll(function () {


        let wScroll = $(window).scrollTop();
        if (wScroll > featuredServicesOffsetTop - 505) {


            $("#topbar").css("display", "none");
            $(".navbar").css("top", "0");
            $(".back-to-top").fadeIn(500)




        }
        else {


            $("#topbar").css("display", "flex");
            $(".navbar").css("top", "40px");
            $(".back-to-top").fadeOut(500)


        }
    })



    for (let i = 0; i < imgs.length; i++) {

        imgs[i].addEventListener("click", function (eventInfo) {

            currentIndex = imgs.indexOf(eventInfo.target);

            let imgSrc = eventInfo.target.getAttribute("src");
            lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";

            lightBoxContainer.style.display = "flex";
            $(".back-to-top").fadeOut(500)

        })
    }
    function nextSlide() {
        currentIndex++;
        if (currentIndex == imgs.length) {
            currentIndex = 0;
        }
        var imgSrc = imgs[currentIndex].getAttribute("src");
        lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";

    }
    function prevSlide() {

        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = imgs.length - 1;

        }
        var imgSrc = imgs[currentIndex].getAttribute("src");
        lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
    }
    function closeSlide() {
        lightBoxContainer.style.display = "none";
        $(".back-to-top").fadeIn(500)


    }
    closeBtn.addEventListener("click", closeSlide)
    nextBtn.addEventListener("click", nextSlide)
    prevBtn.addEventListener("click", prevSlide)
    document.addEventListener("keydown", function (eventInfo) {

        if (eventInfo.code == "ArrowRight") {
            nextSlide();
        }
        else if (eventInfo.code == "ArrowLeft") {
            prevSlide();
        }
        else if (eventInfo.code == "Escape") {
            closeSlide();
        }

    })

    lightBoxContainer.addEventListener("click", function (evenInfo) {

        if (evenInfo.target == lightBoxContainer) {
            lightBoxContainer.style.display = "none";
        }
    })



    $('.multiple-items').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $('.center').slick({
        loop: true,
        centerMode: true,
        infinite: true,
        autoplay: true,
        dots: true,
        centerPadding: '50px',
        slidesToShow: 4,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    new WOW().init();

})

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 85, 3000);
    counter("count2", 0, 18, 1000);
    counter("count3", 0, 8, 500);
    counter("count4", 0, 58, 3000);
});