$(document).ready(function () {
    $(".open_menu").click(function () {
        $(".menu").width("300px")
    })
})

$(document).ready(function () {
    $(".close_menu").click(function () {
        $(".menu").width(0)
    })
})

$(document).ready(function () {
    $(".owl-carousel.partner_slider").owlCarousel({
        loop: true,
        autoWidth: true,
        margin: 80,
    });
});

$(document).ready(function () {
    $(".owl-carousel.projects_slider").owlCarousel({
        items: 4,
        loop: true,
        // freeDrag: false,
        autoWidth: true,
    });
});

var owl = $(".owl-carousel.first_screen_slider")
$(document).ready(function () {
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 30
    });
});


$(".carousel_nav_back").click(function () {
    owl.trigger('prev.owl.carousel');
})

$(".carousel_nav_next").click(function () {
    owl.trigger('next.owl.carousel');
})



