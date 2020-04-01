'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

gulp.task('scss', function() {
  return gulp
    .src('./src/style/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./src/style/css'));
});

gulp.task('scss:watch', function() {
  gulp.watch('./src/style/scss/**', gulp.series('scss'));
});
