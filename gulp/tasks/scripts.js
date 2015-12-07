var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    config = require('../config.js').paths;


gulp.task('scripts', function () {
    browserify({debug: gutil.env.debug})
        .transform(babelify.configure({sourceMaps: 'inline'}))
        .require('app/scripts/application.js', {entry: true})
        .require('app/scripts/directives/directives.js', {entry: true})
        .require('app/scripts/services/services.js', {entry: true})
        .require('app/views/search/search.js', {entry: true})
        .bundle()
        .on('error', err => console.log('Error: ' + err.message))
        .pipe(source('_scripts.min.js'))
        .pipe(buffer())
        .pipe(gulpif(!gutil.env.debug, uglify()))
        .pipe(gulp.dest(config.build))
});
