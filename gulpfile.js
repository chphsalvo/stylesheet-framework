"use strict";

// Gulp
const gulp = require('gulp');
const rename = require("gulp-rename");

// Styles
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const SRC = 'src/';
const DIST = 'dist/';

// TASK //

gulp.task('sass', function () {
  return gulp
  .src('./sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(DIST + '/css'));
});

gulp.task('sass-compressed', function () {
  return gulp
  .src('./sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(rename({
    suffix: ".min"
  }))
  .pipe(gulp.dest(DIST + '/css'));
});

gulp.task('watch', function() {
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(input, ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// TASK //

gulp.task('build', gulp.parallel('sass', 'sass-compressed'));
