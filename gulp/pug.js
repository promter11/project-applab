const gulp = require("gulp");
const pug = require("gulp-pug");

const browserSync = require("browser-sync");

gulp.task("pug", () => {
  return gulp
    .src("./app/pug/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("./app"))
    .pipe(browserSync.stream());
});
