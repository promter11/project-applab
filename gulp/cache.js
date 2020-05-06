const gulp = require("gulp");
const cache = require("gulp-cache");

gulp.task("clear-cache", () => {
  return cache.clearAll();
});
