//This file is to automate the process of uncssing files for weboptimization
//You have to run each case separately. Run uncss by commenting out uglify and vice versa.
var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('default', function() {
    return gulp.src('css/*.css')
        .pipe(uncss({
            html: ['index.html'] //target file is index.html
        }))
        .pipe(gulp.dest('./out'));
});

//Had to change 'simple' to 'default', as gulp would not run unless
//there is a default available.
/* commented out to run uncss. Comment out uncss to run uglify.
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./out'));
});
*/