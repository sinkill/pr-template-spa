var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    rupture = require('rupture'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('autoprefixer-stylus'),
    cmq = require('gulp-group-css-media-queries'),
    minifyCss = require('gulp-minify-css'),
    csscomb = require('gulp-csscomb'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    mainBowerFiles = require('main-bower-files'),
    errorHandler = require('../helpers/errorHandler'),
    config = require('../config.js').paths;


gulp.task('styles', function () {
    gulp.src('*.styl', {
        cwd: 'app/styles',
        nonull: true
    })
        .pipe(plumber({errorHandler}))
        .pipe(stylus({
            errors: true,
            use: [
                rupture(),
                autoprefixer()
            ],
            sourcemap: gutil.env.debug ? {
                comment: false,
                inline: true
            } : false
        }))
        .pipe(gulpif(!gutil.env.debug, cmq()))
        .pipe(gulpif(!gutil.env.debug, minifyCss()))
        .pipe(gulpif(gutil.env.csscomb, csscomb()))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.styles));

    gulp.src(mainBowerFiles('**/*.css'))
        .pipe(gulp.dest(config.styles));

    gulp.src([
        './public/styles/base.min.css',
        './public/styles/bootstrap.min.css',
        './public/styles/common.min.css'
    ])
        .pipe(concat('build.min.css'))
        .pipe(gulp.dest(config.build));
});
