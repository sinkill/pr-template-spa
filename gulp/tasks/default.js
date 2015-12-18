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
            'stylesBower',
            'templatesDependences',
            'scripts',
            //'lint',
            'data',
            'externals',
            'stylesBuild'
        ],
        'server',
        'watch'
    );
});

gulp.task('build', function () {
    gulp.start(
        'stylesDependences',
        'stylesBower',
        'templatesDependences',
        'scripts',
        'copy',
        'data',
        'externals',
        'stylesBuild'
    );
});
