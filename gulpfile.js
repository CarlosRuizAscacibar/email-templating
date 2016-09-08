var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
// Static server



gulp.task('hbs', function () {
    var templateData = {
        firstName: 'Kaanon',
        a:'variable string'
    },
    options = {
        ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
        helpers : {
            capitals : function(str){
                return str.toUpperCase();
            },
            singleRowCell: function(options){
              return '<table border="1"><tr><td>' + options.fn(this) + '</table></tr></td>';
            },
            boldHelper: function(options){
              return '<b>' + options.fn(this) + '</b>';
            }
        }
    };
    return gulp.src('email/email.handlebars')
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));
});
gulp.task('hbs-watch', ['hbs'], function (done) {
    console.log('hbs-watch');
    browserSync.reload();
    done();
});

gulp.task('serve', ['hbs'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist",

        }
     });
    gulp.watch("./email/*", ['hbs-watch']);

});

// gulp.task('serve', ['hbs','browser-sync']);
