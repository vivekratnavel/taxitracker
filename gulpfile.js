var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var uglifyjs = require('uglify-js');
var minifier = require('gulp-uglify/minifier');


// Minify JS
gulp.task('minify-js', function () {
  return gulp.src('server.js')
    .pipe(minifier({}, uglifyjs))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'))
});

// Run everything
gulp.task('default', [ 'minify-js']);

