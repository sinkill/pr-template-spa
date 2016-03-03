'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var reload = require('browser-sync').reload;
var watch = require('gulp-watch');


gulp.task('watch', function () {
    global.watch = true;

    watch('app/sprites/**/*.png', gulp.start(
        'sprites'
    ));

    watch('app/{styles,blocks}/**/*.styl', function () {
        runSequence(
            'styles', function () {
                reload('dist/styles/build.min.css')
            }
        );
    });

    watch('app/pages/**/*.jade', function () {
        runSequence(
            'templates', function () {
                reload
            }
        );
    });

    watch('app/{views,blocks}/**/*.jade', function () {
        runSequence(
            'views', function () {
                reload
            }
        );
    });

    watch('app/resources/**/*', function () {
        runSequence(
            'copy-local',
            reload
        );
    });

    watch('app/data/**/*', function () {
        runSequence(
            'data',
            reload
        );
    });

    watch('app/{scripts,views}/**/*.js', function () {
        runSequence(
            'scripts',
            //'lint',
            reload
        );
    });

    watch('app/icons/**/*.svg', function () {
        runSequence(
            'icons',
            reload
        );
    });
});