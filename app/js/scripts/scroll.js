(function () {
  $('a[href^="#"]').click(function (event) {
    event.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("html, body").animate({ scrollTop: position }, 1500);
  });
})();
