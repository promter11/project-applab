const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");

gulp.task("minify-images", () => {
  return gulp
    .src(["./app/img/**/*", "!./app/img/svg/**/*"])
    .pipe(
      cache(
        imagemin({
          interlaced: true,
          progressive: true,
          optimizationLevel: 5,
          svgoPlugins: [{ removeViewBox: true }],
        })
      )
    )
    .pipe(gulp.dest("./app/img"));
});
