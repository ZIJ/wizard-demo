'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var cdnizer = require('gulp-cdnizer');
var autoprefixer = require('gulp-autoprefixer');

var src = './src/';
var dist = './dist/';

gulp.task('clean', function() {
    return gulp.src(dist, {
        read: false
    }).pipe(clean());
});

gulp.task('lint', function() {
    return gulp.src([src + '**/*.js', 'gulpfile.js'])
        .pipe(jshint({
            node: true,
            browser: true,
            jquery: true
        }))
        .pipe(jshint.reporter('default'));
});

gulp.task('html', function() {
    return gulp.src(src + '*.html')
        .pipe(gulp.dest(dist));
});

gulp.task('htmlProd', function() {
    return gulp.src(src + '*.html')
        .pipe(cdnizer([{
            file: 'vendor/jquery/jquery.js',
            cdn: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.js'
        }]))
        .pipe(gulp.dest(dist));
});

gulp.task('jquery', function() {
    return gulp.src('./bower_components/jquery/dist/jquery.js')
        .pipe(gulp.dest(dist + 'vendor/jquery/'));
});

gulp.task('normalize', function() {
    return gulp.src('./bower_components/normalize-css/normalize.css')
        .pipe(gulp.dest(dist + 'css/'));
});

gulp.task('less', function () {
    gulp.src(src + 'less/**/*.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest(dist + 'css/'));
});

gulp.task('js', ['lint'], function() {
    return gulp.src(src + 'app.js')
        .pipe(browserify({
            transform: ['hbsfy']
        }))
        .pipe(gulp.dest(dist + 'js'));
});

gulp.task('jsProd', ['lint'], function() {
    return gulp.src(src + 'app.js')
        .pipe(browserify({
            transform: ['hbsfy']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(dist + 'js'));
});

gulp.task('default', ['normalize', 'less', 'html', 'jquery', 'js']);
gulp.task('prod', ['normalize', 'less', 'htmlProd', 'jsProd']);