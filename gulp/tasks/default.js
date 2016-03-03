'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


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
            'update-version-config',
            'stylesDependences',
            'stylesExternals',
            'tplsDependences',
            'scripts',
            'copy-local',
            'data',
            'externals'
        ],
        'server',
        'watch'
    );
});

gulp.task('build', function () {
    runSequence(
        'update-version-config',
        'stylesDependences',
        'stylesExternals',
        'tplsDependences',
        'scripts',
        'copy',
        'data',
        'externals'
    );
});