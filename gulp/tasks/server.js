var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	gutil = require('gulp-util'),
	debuga = require('debuga');

gulp.task('server', function () {
	browserSync.init({
		files: ['public/**/*'],
		open: !!gutil.env.open,
		reloadOnRestart: true,
		port: gutil.env.port || 3000,
		server: {
			baseDir: [
				'app/resources',
				'public'
			],
			directory: false,
			middleware: gutil.env.debug ? [debuga()] : []
		},
		tunnel: !!gutil.env.tunnel
	});
});
