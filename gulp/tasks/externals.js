var gulp = require('gulp'),
    mainBowerFiles = require('main-bower-files'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    config = require('../config').paths;


gulp.task('externals', function () {
    var vendors = mainBowerFiles('**/*.js', {
        "overrides": {
            "es5-shim": {
                "ignore": true
            },
            "event-shim.js": {
                "ignore": true
            },
            "html5shiv": {
                "ignore": true
            },
            "css3-mediaqueries-js": {
                "ignore": true
            }
        }
    });

    gulp.src(vendors)
        .pipe(concat('_externals.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.build));

    gulp.src([
        './bower_components/es5-shim/es5-shim.js',
        './bower_components/es5-shim/es5-sham.js',
        './bower_components/event-shim.js/event-shim.js',
        './bower_components/html5shiv/dist/html5shiv.js',
        './bower_components/css3-mediaqueries-js/css3-mediaqueries.js'
    ])
        .pipe(gulp.dest(config.vendors))
});