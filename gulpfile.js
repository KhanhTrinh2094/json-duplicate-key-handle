var gulp = require('gulp');
var mocha = require('gulp-mocha');
var testGlob = './test/**/*.spec.js';

exports.default = function () {
  return gulp.src(testGlob, {read: false})
    .pipe(mocha());
}
