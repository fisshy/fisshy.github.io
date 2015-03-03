var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');



gulp.task('basic', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./basic/app.js');
  return b.bundle()
    .pipe(source('basic.js'))
    .pipe(gulp.dest('./build'));
});