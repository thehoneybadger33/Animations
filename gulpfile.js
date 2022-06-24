const { src, dest, watch, parallel } = require('gulp'); 
const scss = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    });
}

function styles() {
    return src('src/scss/**/style.scss')
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('src/css'))
        .pipe(browserSync.stream())
}


function build() {
    return src([
        'src/css/style.css',
        'src/*.html'
    ], { base: 'src/' })
        .pipe(dest('dist/'))
}

function serve(done) {
    browsersync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    }, done);
}

function watching() {
    watch(['src/scss/**/*.scss'], styles);
    watch(['src/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.serve = serve;
exports.build = parallel(serve, browsersync, build);
exports.default = parallel(build, watching, styles, browsersync,);