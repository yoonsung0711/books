const gulp = require('gulp');

// /* */ gulp.task('dep', async () => {
//   const npmDist = require('gulp-npm-dist');
//   gulp.src(npmDist(), {base:'./node_modules'})
//     .pipe(gulp.dest('./assets/lib'));
// });

gulp.task('html', async() => {
  const pug = require('gulp-pug')
  gulp.src('./src/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('dist'));
})

gulp.task('dep:js', async() => {
  const concat = require('gulp-concat');
  const debug = require('gulp-debug');
  const uglify = require('gulp-uglify');
  gulp.src([
    "./assets/lib/jquery-1.12.4.js",
    "./assets/lib/jquery.dataTables.min.js",
    "./assets/lib/dataTables.buttons.min.js",
    "./assets/lib/jszip.min.js",
    "./assets/lib/buttons.html5.min.js",
    "./assets/lib/buttons.print.min.js",
    "./assets/lib/popper.min.js",
    "./assets/lib/bootstrap.min.js",
    "./assets/lib/bootstrap-editable.js",
  ])
  .pipe(debug({title: '3rd Party Js lib:'}))
  .pipe(concat('bundle.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('dep:css', async() => {
  const concat = require('gulp-concat');
  const debug = require('gulp-debug');
  gulp.src([
    "./assets/lib/bootstrap.min.css",
    "./assets/lib/jquery.dataTables.min.css",
    "./assets/lib/buttons.dataTables.min.css",
    "./assets/lib/bootstrap-editable.css",
  ])
  .pipe(debug({title: '3rd Party Css lib:'}))
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('dep:etc', async() => {
  const debug = require('gulp-debug');
  return [gulp
      .src([ "./assets/fonts/**/*.*", ])
        .pipe(debug())
        .pipe(gulp.dest('dist/fonts'))
    ,
    gulp.src([ "./assets/images/**/*.*", ])
        .pipe(debug())
        .pipe(gulp.dest('dist/images'))
  ]
})

gulp.task('bundle:js', function() {
  const webpack = require('gulp-webpack');
  const uglify = require('gulp-uglify');
  return gulp.src('src/index.js')
    .pipe(webpack({
      output: {
        filename: 'app.js',
      }
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});


gulp.task('bundle:css', async () => {
  const uglifycss = require('gulp-uglifycss');
  gulp.src('./src/style.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('bundle', gulp.series('html', 'dep:js', 'dep:css', 'bundle:js', 'bundle:css'));

gulp.task('watch', async () => {
  gulp.watch('src/**/*.*', gulp.series('bundle'))
});

const defaultTask = gulp.parallel('bundle', 'watch');

module.exports = {
  default: defaultTask
}