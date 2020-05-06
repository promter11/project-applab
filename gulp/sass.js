const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");

const browserSync = require("browser-sync");

gulp.task("sass", () => {
  return gulp
    .src("./app/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ cascade: "false" }))
    .pipe(rename({ suffix: ".min", prefix: "" }))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("./app/css"))
    .pipe(browserSync.stream());
});
