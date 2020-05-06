const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

const browserSync = require("browser-sync");

gulp.task("combine-scripts", () => {
  return gulp
    .src("./app/js/scripts/**/*.js")
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(concat("scripts.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./app/js"))
    .pipe(browserSync.stream());
});
