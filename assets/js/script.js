// Best Selling Products Section
$(document).ready(function () {
    $(".tab").click(function () {
        var filter = $(this).data("filter");

        $(".tab").removeClass("active");
        $(this).addClass("active");

        if (filter === "#all") {
            $(".product-item").show();
        } else {
            $(".product-item").hide();
            $("." + filter).show();
        }
    });
});

// Navbar Section
$(document).ready(function ($) {
    $(".stellarnav").stellarNav({
        theme: "plain",
        breakpoint: 768,
        menuLabel: "Menu",
        sticky: false,
        position: "right",
        openingSpeed: 250,
        closingDelay: 250,
        showArrows: true,
        closeBtn: true,
        mobileMode: false,
        scrollbarFix: false,
    });
});
