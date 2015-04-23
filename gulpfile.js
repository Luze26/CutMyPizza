var gulp 			= require('gulp');
var livereload 		= require('gulp-livereload');
var plumber 		= require('gulp-plumber');
var child_process 	= require('child_process');

gulp.task('run', function() {
	child_process.exec('cordova run browser');
});

gulp.task('reload', function() {
	console.log('reload');
	child_process.exec('cordova build browser');
	livereload();
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('www/**/*', ['reload']);
});

gulp.task('default', ['run', 'watch'], function () {
});