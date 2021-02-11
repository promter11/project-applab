const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");

gulp.task("build-app", (done) => {
  const buildMinifiedCss = gulp
    .src("./app/css/*.css")
    .pipe(gulp.dest("build/css"));

  const buildMinifiedJs = gulp.src("./app/js/*.js").pipe(gulp.dest("build/js"));

  const buildImg = gulp.src("./app/img/**/*").pipe(gulp.dest("build/img"));

  const buildFonts = gulp
    .src("./app/fonts/**/*")
    .pipe(gulp.dest("build/fonts"));

  const buildCSSLibs = gulp
    .src("./app/libs/*.css")
    .pipe(gulp.dest("build/libs"));

  const buildJsLibs = gulp.src("./app/libs/*.js").pipe(gulp.dest("build/libs"));

  done();
});
