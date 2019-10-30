const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const minifyCSS = require('gulp-clean-css');

gulp.task('styles', function() {
  return gulp.src('less/**.less')
    .pipe(less())
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(rename({ suffix: '.min', prefix : '' }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'))
});

// gulp.task('watch', function() {
//     gulp.watch(gulp.parallel('styles'));
// });

gulp.task('build', gulp.parallel('styles'));