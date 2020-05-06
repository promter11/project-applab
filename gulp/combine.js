const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");

gulp.task("build-app", (done) => {
  const buildPug = gulp.src("./app/pug/**/*").pipe(gulp.dest("build/pug"));

  const buildExpandedCss = gulp
    .src("./app/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(autoprefixer({ cascade: "false" }))
    .pipe(gulp.dest("build/css"));

  const buildMinifiedCss = gulp
    .src("./app/css/*.css")
    .pipe(gulp.dest("build/css"));

  const buildExpandedJs = gulp
    .src("./app/js/scripts/**/*.js")
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest("build/js"));

  const buildMinifiedJs = gulp
    .src("./app/js/**/*.js")
    .pipe(gulp.dest("build/js"));

  const buildImg = gulp.src("./app/img/**/*").pipe(gulp.dest("build/img"));

  const buildFonts = gulp
    .src("./app/fonts/**/*")
    .pipe(gulp.dest("build/fonts"));

  const buildLibs = gulp.src("./app/libs/**/*").pipe(gulp.dest("build/libs"));

  done();
});
