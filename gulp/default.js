const gulp = require("gulp");

gulp.task("default", (done) =>
  gulp.series("browser-sync", "sass", "combine-scripts")(done)
);
