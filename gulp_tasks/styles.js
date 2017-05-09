const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');

const conf = require('../conf/gulp.conf');

gulp.task('styles', styles);

function styles() {
  return gulp.src([conf.path.src('index.scss'), conf.path.src('app/**/*.scss')])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'})).on('error', conf.errorHandler('Sass'))
    .pipe(postcss([autoprefixer()])).on('error', conf.errorHandler('Autoprefixer'))
    .pipe(sourcemaps.write())
    .pipe(concat('index.css'))
    .pipe(gulp.dest(conf.path.tmp('')))
    .pipe(browserSync.stream());
}
