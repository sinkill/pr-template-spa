var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    ngAnnotate = require('gulp-ng-annotate'),
    errorHandler = require('gulp-plumber-error-handler'),
    config = require('../config').paths;

var env = gutil.env.env;

gulp.task('scripts', function () {
    gulp.src(['app/blocks/**/*.js', 'app/scripts/**/*.js'])
        .pipe(plumber({errorHandler: errorHandler('Error in \'scripts\' task')}))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(ngAnnotate())
        .pipe(concat('_scripts.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulpif(!!env, uglify()))
        .pipe(gulp.dest(config.build));
});