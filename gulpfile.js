const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()

function compileSass(done) {
	gulp.src('./src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({output: 'compressed'}).on('error',sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./src/css'));
	done();
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

exports.sass = gulp.parallel(compileSass)
exports.default = gulp.parallel(compileSass,watcher)