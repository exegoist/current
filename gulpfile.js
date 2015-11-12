var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var jade = require('gulp-jade');
var gls = require('gulp-live-server');


gulp.task('styles', function(){
  return gulp.src([
    './assets/styles/app.sass'
  ])
  .pipe(sass({
    includePaths: [
      './bower_components/bootstrap-sass/assets/stylesheets',
      './bower_components/fullpage.js'
    ]
  }))
  .pipe(concat('app.css'))
  .pipe(gulp.dest('./build/css'));
});

gulp.task('jade', function(){
  return gulp.src([
    './assets/**/*.jade'
  ])
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('scripts', function(){
  return gulp.src([
    './bower_components/jquery/dist/jquery.js',
    './bower_components/fullpage.js/jquery.fullPage.js',
    './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
    './assets/scripts/app.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./build/js'));
});

gulp.task('images', function(){
  return gulp.src([
    './assets/images/**/*.png',
    './assets/images/**/*.jpg',
    './assets/images/**/*.svg'
  ])
  .pipe(gulp.dest('./build/img'));
});



gulp.task('watch', ['styles','scripts','images','jade'], function(){
  gulp.watch(['./assets/styles/**/*.sass', './assets/styles/**/*.scss'], ['styles']);
  gulp.watch('./assets/**/*.jade', ['jade']);
  gulp.watch('./assets/scripts/**/*.js', ['scripts']);
});

gulp.task('serve', function(){
  var server = gls.static('./build', 8080);
  server.start();
  gulp.watch(['./build/**/*.html','./build/**/*.css','./build/**/*.js'], function(file){
    server.notify.apply(server, [file]);
  });
});

gulp.task('default', ['serve', 'watch']);
