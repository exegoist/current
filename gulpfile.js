var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

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
  .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function(){
  gulp.watch(['./assets/styles/**/*.sass', './assets/styles/**/*.scss'], ['styles']);
});

gulp.task('default', ['watch']);
