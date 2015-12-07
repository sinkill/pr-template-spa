var gulp = require('gulp'),
    runSequence = require('run-sequence');


gulp.task('stylesDependences', function () {
    runSequence(
        'sprite',
        'icons',
        'styles'
    );
});

gulp.task('templatesDependences', function () {
    runSequence(
        'templates',
        'views'
    );
});

gulp.task('default', function () {
    runSequence(
        [
            'stylesDependences',
            'templatesDependences',
            'scripts',
            'lint',
            'externals'
        ],
        'server',
        'watch'
    );
});

gulp.task('build', ['del'], function () {
    gulp.start(
        'stylesDependences',
        'templatesDependences',
        'scripts',
        'copy',
        'externals'
    );
});
