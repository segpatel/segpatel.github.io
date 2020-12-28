setNavbarClass();
$(document).ready(function() {
    setNavbarClass();
    $(window).scroll(function() {
        setNavbarClass();
    });
});

function setNavbarClass() {
    if ($(window).scrollTop() > 0) {
        $("#navbar").addClass("scrolled");
    } else {
        $("#navbar").removeClass("scrolled");
    }
}