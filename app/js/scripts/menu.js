(function () {
  $(".header-burger, .header__background").click(function () {
    $(".header-list").toggleClass("header-list--active");
    $(".header__background").toggleClass("header__background--active");
  });
})();
