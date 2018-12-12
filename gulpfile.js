var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function(){
  return gulp.src([
  	'node_modules/jquery/dist/jquery.js',
  	'./src/*.js'
  	])
    .pipe(sourcemaps.init())
    .pipe(concat('espresso.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'))
});

// gulp.task('default', [ 'html', 'css', 'js' ]);