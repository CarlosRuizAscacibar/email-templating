var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
// Static server



gulp.task('hbs', function () {
    var templateData = {
        firstName: 'Kaanon',
        a: 'variable'
    },
    options = {}
    return gulp.src('src/hello.handlebars')
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'))
});
gulp.task('hbs-watch', ['hbs'], function (done) {
    console.log('hbs-watch')
    browserSync.reload();
    done();
});

gulp.task('serve', ['hbs'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist",

        }
     });
    gulp.watch("./src/*", ['hbs-watch']);

});

// gulp.task('serve', ['hbs','browser-sync']);
