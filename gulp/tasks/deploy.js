var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    ghpages = require('gulp-gh-pages');

gulp.task('deploy', function () {
    gulp.src(['public/**/*', '!public/robots.txt']).pipe(ghpages({branch: 'frontend'}))
});