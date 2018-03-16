var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat')

gulp.task('build', ['html','js']);

gulp.task('default', ['build', 'watch']);

gulp.task('connect', function() {
	connect.server({
		livereload: true,
		root: 'dist'
	});
});

gulp.task('html', function() {
	return gulp.src(['index.html', 'login.html', 'register.html']) 
		.pipe(gulp.dest('dist/'))
		.pipe(livereload());
});

gulp.task('js', function(){
	return gulp.src('./js/**/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(livereload());
});

gulp.task('watch', ['connect'], function() {
	livereload: true;
	livereload.listen();
	gulp.watch(['index.html', 'register.html', 'login.html'], ['html']);
	gulp.watch('js/**/*.js', ['js']);
});