portfolio = {}


portfolio.mobileNav = () => {
    $(".menu-collapsed").click(function () {
        $(this).toggleClass("menu-expanded");
    });
}


portfolio.init = () => {
    portfolio.mobileNav();
}

$(function () {
    portfolio.init();
});