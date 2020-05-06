const gulp = require("gulp");
const del = require("del");

gulp.task("clean-build", (done) => {
  del.sync("build");

  done();
});

gulp.task("build", (done) =>
  gulp.series(
    "clean-build",
    "sass",
    "pug",
    "combine-scripts",
    "minify-html",
    "minify-css-libs",
    "minify-js-libs",
    "minify-images",
    "build-app"
  )(done)
);
