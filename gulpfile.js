const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
var minifyCSS = require("gulp-minify-css");

function compileSass(done) {
	gulp.src('./src/sass/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./src/css'));
	done();
}

function compressCss(done) {
	gulp.src('./src/css/*.css') // path to your file
		.pipe(minifyCSS())
		.pipe(gulp.dest('./minify-css'));
	done()
}

function watcher(done) {
	browserSync.init({
		server: './src'
	})
	gulp.watch('./src/sass/**/*.scss',gulp.parallel(compileSass,reload));
	gulp.watch('./src/*.html',gulp.series(reload));
	done()
}

function reload(done) {
	browserSync.reload()
	done()
}

exports.minifi = gulp.parallel(compressCss)
exports.sass = gulp.parallel(compileSass)
exports.default = gulp.parallel(compileSass,watcher)