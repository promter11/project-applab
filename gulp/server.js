const gulp = require("gulp");
const browserSync = require("browser-sync");

gulp.task("browser-sync", () => {
  browserSync.create();
  browserSync.init({
    server: {
      baseDir: "./app",
    },
  });

  gulp.watch("./app/scss/**/*.scss", gulp.task("sass"));
  gulp.watch("./app/js/scripts/**/*.js", gulp.task("combine-scripts"));
  gulp.watch("./app/pug/**/*.pug", gulp.task("pug"));
  gulp.watch("./app/*.html").on("change", browserSync.reload);
});
