(function () {
  $(".plans-switch").click(function () {
    $(this)
      .children()
      .each(function (_, el) {
        $(el).toggleClass("plans-switch__item--active");
      });

    $(".plans-row").each(function (_, el) {
      $(el).toggleClass("plans-row--disabled");
    });
  });
})();
