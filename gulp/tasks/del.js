var gulp = require('gulp'),
    del = require('del'),
    config = require('../config').paths;


gulp.task('del', cb => del(config.publicPath + '/*', cb));
