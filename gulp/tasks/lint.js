var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    eslint = require('gulp-eslint'),
    errorHandler = require('../helpers/errorHandler');


gulp.task('lint', function () {
    gulp.src('**/*.js', {cwd: 'app'})
        .pipe(plumber({errorHandler}))
        .pipe(eslint())
        .pipe(eslint.format());
});