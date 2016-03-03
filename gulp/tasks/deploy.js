'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var ghpages = require('gulp-gh-pages');

gulp.task('deploy', function () {
    gulp.src(['dist/**/*', '!dist/robots.txt']).pipe(ghpages({branch: 'frontend'}))
});