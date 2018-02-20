var gulp = require('gulp');
var webpack = require('webpack-stream');
var clean = require('gulp-clean');

// define tasks here
gulp.task('default', ['JS']);



gulp.task('JS', ['clean'], function () {
    return gulp.src('source/main.js')
            .pipe(webpack( require('./webpack.config.js') ))
            .pipe(clean('/dist/'))
            .pipe(gulp.dest('dist/'));
  });


gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
      .pipe(clean());
  });