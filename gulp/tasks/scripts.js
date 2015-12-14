var gulp = require('gulp'),
    concat = require('gulp-concat'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    config = require('../config.js').paths;


gulp.task('scripts', function () {
    gulp.src(['app/scripts/**/*.js', 'app/views/**/*.js'])
        .pipe(concat('_scripts.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(config.build));
});
