var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

//default 'gulp' task
gulp.task('default', ['sass', 'watch']);


//Sass compiler
gulp.task('sass', function () {

	gulp.src('./sass/style.scss')

		.pipe(plumber(plumberErrorHandler))
		.pipe(sass())
		.pipe(gulp.dest('.'))
		.pipe(livereload());

});

//Watch task
gulp.task('watch', function() {

	livereload.listen();

	gulp.watch('sass/style.scss', ['sass']);

});

//Error Handling
var plumberErrorHandler = { errorHandler: notify.onError({

	title: 'Gulp',

	message: 'Error: <%= error.message %>'

	})

};









