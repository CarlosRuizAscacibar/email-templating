var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var fs = require('fs');

// Static server



gulp.task('hbs', function () {
    var templateData = JSON.parse(fs.readFileSync('email/variables.json'));
    options = {};
    return gulp.src('email/hello.handlebars')
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'))
});


gulp.task('default', ['hbs'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist"

        }
     });
    gulp.watch(["./email/*"], ['hbs',browserSync.reload]);

});

// gulp.task('serve', ['hbs','browser-sync']);
