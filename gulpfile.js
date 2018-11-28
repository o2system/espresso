const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');

gulp.task('js', () =>
	gulp.src([
		'node_modules/jquery/dist/jquery.js',
		'src/*.js'
		])
	.pipe(eslint({
		rules: {
			'no-alert': 0,
			'no-bitwise': 0,
			'camelcase': 1,
			'curly': 1,
			'eqeqeq': 0,
			'no-eq-null': 0,
			'guard-for-in': 1,
			'no-empty': 1,
			'no-use-before-define': 0,
			'no-obj-calls': 2,
			'no-unused-vars': 0,
			'new-cap': 1,
			'no-shadow': 0,
			'strict': 2,
			'no-invalid-regexp': 2,
			'comma-dangle': 2,
			'no-undef': 1,
			'no-new': 1,
			'no-extra-semi': 1,
			'no-debugger': 2,
			'no-caller': 1,
			'semi': 1,
			'quotes': 0,
			'no-unreachable': 2
		},
		globals: [
		'jQuery',
		'$'
		],
		envs: [
		'browser'
		]
	}))
	.pipe(eslint.formatEach('compact', process.stderr))
	
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(uglify())
	.pipe(concat('espresso.js'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('dist'))
	);


gulp.task('watch', () => {
	gulp.run('default');

        // gulp.watch('src/css/**/*.css', function(event) {
        //     console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        //     gulp.run('css');
        // });

        gulp.watch('src/*.js', function(event) {
        	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            // gulp.run('js');
        });

        // gulp.watch('src/images/**/*', function(event) {
        //     console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        //     gulp.run('images');
        // });
    });

gulp.task('default', [ 'js' ]);