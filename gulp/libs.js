const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("minify-css-libs", () => {
  return gulp
    .src(["./app/libs/bootstrap/bootstrap.min.css"])
    .pipe(cleanCSS())
    .pipe(concat("libs.min.css"))
    .pipe(gulp.dest("./app/libs"));
});

gulp.task("minify-js-libs", () => {
  return gulp
    .src([
      "./app/libs/jquery/jquery-3.4.1.min.js",
      "./app/libs/bootstrap/bootstrap.min.js",
    ])
    .pipe(uglify())
    .pipe(concat("libs.min.js"))
    .pipe(gulp.dest("./app/libs"));
});
