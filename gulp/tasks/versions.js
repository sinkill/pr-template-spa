'use strict';

var manifest = require('gulp-manifest');
var replace = require('gulp-replace');
var gulp = require('gulp');
var pj = require('../../package.json');
var config = require('../config').paths;


gulp.task('update-version-config', function () {
    return gulp.src('./app/scripts/application.js')
        .pipe(replace(/version: '.*?'/, 'version: \'' + pj.version + '\''))
        .pipe(gulp.dest('./app/scripts'));
});

gulp.task('update-version-comments', function () {
    return gulp.src('app/**/*.js')
        .pipe($.replace(pj.name + / v[0-9.]*/, pj.name + ' v' + pj.version))
        .pipe(gulp.dest(config.distPath));
});

gulp.task('add-appcache-manifest', function () {
    var relativePath = 'dist',
        sources = [
            './' + relativePath + '/**/*',
            '!' + relativePath + '/data/**/*',
            '!' + relativePath + '/fonts/**/*',
            '!' + relativePath + '/images/not_cached/**/*',
            '!' + relativePath + '/pdf/**/*',
            '!' + relativePath + '/views/**/*',
            '!' + relativePath + '/manifest.*',
            '!' + relativePath + '/*.html'
        ];

    gulp.src(sources, {base: './' + relativePath})
        .pipe(manifest({
            timestamp: true,
            network: ['http://*', 'https://*', '*'],
            filename: 'appcache.manifest',
            exclude: ['appcache.manifest']
        }))
        .pipe(gulp.dest(config.distPath))
        .pipe(gulp.dest(production.distPath));

    gulp.src(sources, {base: './' + relativePath})
        .pipe(manifest({
            timestamp: true,
            network: ['http://*', 'https://*', '*'],
            filename: 'appcache.manifest',
            exclude: ['appcache.manifest']
        }))
        .pipe(gulp.dest(config.distPath));
});