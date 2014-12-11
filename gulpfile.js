var gulp = require('gulp')
,	concat = require('gulp-concat')
,	minifyCss = require('gulp-minify-css')
,	uglify = require('gulp-uglify')
;


gulp.task('default', ['vendor-css','vendor-js','app-js'], function() {
  // place code for your default task here
});

gulp.task('vendor-css', function() {
  gulp.src('./static/css/*.css')
    .pipe(concat('vendor.css'))
    .pipe(minifyCss({keepSpecialComments:0}))
    .pipe(gulp.dest('./static/'))
});

gulp.task('vendor-js', function() {  
  return gulp.src(['./static/script/vendor/jquery*.js','./static/script/vendor/*.js'])
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./static/'))
});

gulp.task('app-js', function() {  
  return gulp.src('./static/script/app/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./static/'))
});
