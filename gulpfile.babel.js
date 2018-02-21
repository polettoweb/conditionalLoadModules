const gulp = require('gulp');
const webpack = require('webpack-stream');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');

// define tasks here
gulp.task('default', ['JS','browser-sync']);



gulp.task('JS', ['clean'], function () {
    return gulp.src('source/main.js')
            .pipe(webpack( require('./webpack.config.js') ))
            //.pipe(uglify())
            .pipe(gulp.dest('dist/'));
  });


gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
      .pipe(clean());
  });

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("*/*.*").on('change', browserSync.reload);
});