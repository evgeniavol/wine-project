 // Mask input
 $(document).ready(function () {
	$("#phone").mask("+ 7 (999) 999-99-99");
});
 // Mobile nav
 $("#nav-toggle").on("click", function() {
    $(this).toggleClass("nav-toggle--active");
    $(this).toggleClass("fixed");
    $("#background").toggleClass("background--active");
    $("#mobile-nav").toggleClass("mobile-nav--visible");
});

$("#background").on("click", function() {
    $("#mobile-nav").removeClass("mobile-nav--visible");
    $("#nav-toggle").removeClass("nav-toggle--active");
    $("#nav-toggle").removeClass("fixed");
    $("#background").removeClass("background--active");
});

$(window).on("resize", function() {
    var win = $(this);
    if (win.height() > 768) {
        $("#mobile-nav").removeClass("mobile-nav--visible");
        $("#nav-toggle").removeClass("nav-toggle--active");
        $("#nav-toggle").removeClass("fixed");
        $("#background").removeClass("background--active");
    }
});

