var
  gulp = require('gulp'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  stylus = require('gulp-stylus')

gulp.task('js', function() {
  gulp.src(['./src/js/jquery.js', './src/js/app.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('magicstar.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/js'))
})

gulp.task('css', function() {
  gulp.src('./src/styl/main.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./build/css'))
})

gulp.task('watch', function() {
  gulp.watch('./src/js/*.js', ['js'])
})

gulp.task('build', ['js', 'css'])

gulp.task('default', ['build', 'watch'])
