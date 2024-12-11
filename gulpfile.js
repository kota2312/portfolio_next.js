const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();

// パスの設定
const paths = {
  scss: './styles/**/*.scss', // すべての SCSS ファイルを監視
  entry: './styles/main.scss', // コンパイルのエントリポイント
};

// SCSS をコンパイルするタスク
function buildSass() {
  return gulp
    .src(paths.entry) // エントリポイントの main.scss を指定
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./styles/')) // 出力先
    .pipe(browserSync.stream()); // CSS の変更をブラウザに反映
}

// BrowserSync を初期化するタスク
function initBrowserSync(done) {
  browserSync.init({
    proxy: 'http://localhost:3000', // 既存のサーバーをプロキシ
    notify: false, // 通知をオフ
    open: true, // 自動でブラウザを開く
  });
  done();
}

// ファイルを監視するタスク
function watchFiles() {
  gulp.watch(paths.scss, buildSass); // SCSS ファイルを監視してコンパイル
  gulp.watch('./**/*.html').on('change', browserSync.reload); // HTML ファイルの変更でリロード
  gulp.watch('./**/*.js').on('change', browserSync.reload); // JS ファイルの変更でリロード
}

// タスクをエクスポート
exports.build = buildSass; // 手動で SCSS をコンパイル
exports.watch = gulp.series(buildSass, initBrowserSync, watchFiles); // ファイル監視とリロード
exports.default = gulp.series(buildSass, initBrowserSync, watchFiles); // 初回ビルド & 監視
