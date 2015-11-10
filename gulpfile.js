var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var jade = require('gulp-jade');

gulp.task('styles', function(){
  return gulp.src([
    './assets/styles/app.sass'
  ])
  .pipe(sass({
    includePaths: [
      './bower_components/foundation/scss'
    ]
  }))
  .pipe(concat('app.css'))
  .pipe(gulp.dest('./build/css'));
});

gulp.task('jade', function(){
  return gulp.src([
    './assets/**/*.jade'
  ])
  .pipe(jade())
  .pipe(gulp.dest('./build'));
});

gulp.task('scripts', function(){
  return gulp.src([
    './bower_components/jquery/dist/jquery.js',
    './bower_components/foundation/js/foundation.js',
    './bower_components/jquery-mousewheel/jquery.mousewheel.js',
    './assets/scripts/app.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function(){
  gulp.watch(['./assets/styles/**/*.sass', './assets/styles/**/*.scss'], ['styles']);
  gulp.watch('./assets/**/*.jade', ['jade']);
  gulp.watch('./assets/**/*.js', ['scripts']);
});

gulp.task('default', ['watch']);
