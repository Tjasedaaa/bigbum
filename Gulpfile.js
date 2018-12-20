"use strict";

var gulp = require('gulp'),
    settings = require('./settings'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    newer = require('gulp-newer'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    webpack = require('webpack'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    imgSrc = 'assets/images/originals/*',
    imgDest = 'assets/images/';

gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    proxy: settings.urlToPreview,
    ghostMode: false
  });

  gulp.watch('./**/*.php', function() {
    browserSync.reload();
  });
  gulp.watch(settings.themeLocation + 'assets/sass/**/*.scss', ['waitForStyles']);
  gulp.watch([settings.themeLocation + 'assets/js/dev/modules/*.js', settings.themeLocation + 'assets/js/dev/app.js'], ['waitForScripts']);
});

gulp.task('styles', function() {
  return gulp.src('assets/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./'))
});

gulp.task('scripts', function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if(err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

gulp.task('waitForStyles', ['styles'], function() {
  return gulp.src(settings.themeLocation + 'style.css')
    .pipe(browserSync.stream());
});

gulp.task('waitForScripts', ['scripts'], function() {
  browserSync.reload();
});

gulp.task('images', function() {
  return gulp.src(imgSrc, {base: 'assets/images/originals'})
      .pipe(newer(imgDest))
      .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
      .pipe(gulp.dest(imgDest));
});

gulp.task('default', ['styles', 'scripts', 'watch', 'images']);
