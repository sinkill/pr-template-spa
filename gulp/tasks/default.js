var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('stylesDependences', function () {
    runSequence(
        'sprites',
        //'icons',
        'styles'
    );
});

gulp.task('tplsDependences', function () {
    runSequence(
        'templates',
        'views'
    );
});

gulp.task('default', function () {
    runSequence(
        [
            'stylesDependences',
            'stylesExternals',
            'tplsDependences',
            'scripts',
            'copy',
            'externals'
        ],
        'server',
        'watch'
    );
});

gulp.task('build', function () {
    runSequence(
        'stylesDependences',
        'stylesExternals',
        'tplsDependences',
        'scripts',
        'copy',
        'externals'
    );
});