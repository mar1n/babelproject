const gulp = require("gulp");
const babelify = require("babelify");
const browserify = require("browserify");
const connect = require("gulp-connect");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");

function build(cb) {
  // place code for your default task here
  browserify("es6TOes5/modules/main.js")
    .transform("babelify", {
      presets: ["@babel/preset-env"],
    })
    .bundle()
    .pipe(source("main.js"))
    .pipe(buffer())
    .pipe(gulp.dest("dev/"));
  cb();
}

function watch(cb) {
    gulp.watch('./*.js', gulp.series(build));
    cb()
}

function connectG(cb) {
       connect.server({
      root: "./dev",
      livereload: true
   });
    cb()
}

exports.default = gulp.series(build, watch, connectG);