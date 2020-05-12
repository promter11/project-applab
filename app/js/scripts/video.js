(function () {
  var src = "https://www.youtube.com/embed/5qap5aO4i9A";

  $("#videoModal").on("show.bs.modal", function () {
    $(this).find("iframe").attr("src", src);
  });

  $("#videoModal").on("hide.bs.modal", function () {
    $(this).find("iframe").attr("src", "");
  });
})();
