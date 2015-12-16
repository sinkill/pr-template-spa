var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    spritesmith = require('gulp.spritesmith'),
    imagemin = require('gulp-imagemin'),
	errorHandler = require('gulp-plumber-error-handler'),
    config = require('../config.js').paths;


gulp.task('sprite', function () {
    var spriteData = gulp.src('app/sprite/**/*.png', {read: false})
		.pipe(plumber({errorHandler: errorHandler('Error in \'sprite\' task')}))
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.styl',
            imgPath: '../images/sprite.png',
            cssFormat: 'stylus',
            algorithm: 'binary-tree',
            padding: 8,
            engine: 'pixelsmith',
            imgOpts: {
                format: 'png'
            }
        }));

    spriteData.img
        .pipe(imagemin({optimizationLevel: 3}))
        .pipe(gulp.dest(config.images));

    return spriteData.css.pipe(gulp.dest(config.appStylesHelpers));
});
