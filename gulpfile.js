var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var inject = require('gulp-inject');

gulp.task('connect', function () {
	connect.server({
		port: 4000
	})
});

gulp.task('index', function () {
  var target = gulp.src('index.html');
  var sources = gulp.src(['*.js', 'controllers/*.js', 'directives/*.js', 'services/*.js', 'filters/*.js', 'css/*.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest(''));
});

gulp.task('open', ['index', 'connect'], function(){
       gulp.src('index.html').pipe(open({uri: 'http://localhost:4000', app: 'chrome'}));
});

gulp.task('default', ['connect']);
