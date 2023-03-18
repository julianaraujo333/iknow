"use strict";

// Load plugins
const autoprefixer = require("gulp-autoprefixer");
const browsersync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const gulp = require("gulp");
const header = require("gulp-header");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const concat = require('gulp-concat')
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const gulpImagemin = require('gulp-imagemin');

// Load package.json for banner
const pkg = require('./package.json');

// Set the banner content
const banner = ['/*!\n',
    ' *  <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright ' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' */\n',
    '\n'
].join('');

// BrowserSync
function browserSync(done) {
    browsersync.init({
        proxy: "http://localhost/sites/iknow"
    });
    done();
}

// BrowserSync reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

// TASK CSS
function css() {
    return gulp
        .src("./scss/**/style.scss")
        .pipe(plumber())
        .pipe(sass({
            outputStyle: "expanded",
            includePaths: "./node_modules",
        }))
        .on("error", sass.logError)
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest("./assets/css"))
        .pipe(browsersync.stream());
}

// TASK JS
function js() {
    return gulp
        .src([
            './js/*.js',
            '!./js/*.min.js',
        ])
        .pipe(uglify())
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./assets/js'))
        .pipe(browsersync.stream());
}

// TASK IMG
function img() {
    return gulp.src('./img-src/**/*')
        .pipe(gulpImagemin([
            gulpImagemin.gifsicle({ interlaced: true }),
            gulpImagemin.mozjpeg({ quality: 90, progressive: true }),
            gulpImagemin.optipng({ optimizationLevel: 8 }),
            gulpImagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('./assets/img'))
};

// Watch files
function watchFiles() {
    gulp.watch("./scss/**/*", css);
    gulp.watch(["./js/**/*", "!./js/**/*.min.js"], js);
    // gulp.watch("./img-src/**/*", img);
    gulp.watch("./**/*.html", browserSyncReload);
}

// Define complex tasks
const build = gulp.series(gulp.parallel(css, js));
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));

// Export tasks
exports.css = css;
exports.js = js;
exports.build = build;
exports.watch = watch;
exports.default = watch;