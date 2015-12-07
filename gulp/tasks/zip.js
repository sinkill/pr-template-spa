var gulp = require('gulp'),
    gutil = require('gulp-util'),
    zip = require('gulp-zip'),
    config = require('../config.js').paths;

var correctNumber = number => number < 10 ? '0' + number : number;

var getDateTime = function () {
    var now = new Date();
    var year = now.getFullYear();
    var month = correctNumber(now.getMonth() + 1);
    var day = correctNumber(now.getDate());
    var hours = correctNumber(now.getHours());
    var minutes = correctNumber(now.getMinutes());

    return `${year}-${month}-${day}-${hours}${minutes}`;
};

gulp.task('zip', function () {
    var datetime = gutil.env.zipDateTime ? '-' + getDateTime : '';
    var zipName = 'public' + datetime + '.zip';

    gulp.src('public/**/*')
        .pipe(zip(zipName))
        .pipe(gulp.dest(config.publicPath));
});