const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();

const paths = {
  scss: './styles/**/*.scss',
  entry: './styles/main.scss',
  js: [
    './components/**/*.js',
    './libs/**/*.js',
    './pages/**/*.js',
    './utility/**/*.js',
  ],
};

function buildSass() {
  return gulp
    .src(paths.entry)
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./styles/'))
    .pipe(browserSync.stream());
}

function initBrowserSync(done) {
  const nextPort = process.env.NEXT_PORT || process.env.PORT || 3000;

  browserSync.init({
    proxy: `http://localhost:${nextPort}`,
    notify: false,
    open: true,
    ui: false,
  });
  done();
}

function watchFiles() {
  gulp.watch(paths.scss, buildSass);
  gulp.watch(paths.js).on('change', browserSync.reload);
}

exports.build = buildSass;
exports.watch = gulp.series(buildSass, initBrowserSync, watchFiles);
exports.default = gulp.series(buildSass, initBrowserSync, watchFiles);
