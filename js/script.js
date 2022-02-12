$(document).ready(function () {
    $('.header__menu__burger').click(function (event) {
        $('.header__menu__burger,.header__menu__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});