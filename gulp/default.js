const gulp = require("gulp");

gulp.task("default", (done) =>
  gulp.series("browser-sync", "pug", "sass", "combine-scripts")(done)
);
