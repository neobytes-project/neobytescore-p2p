'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('neobytescore-build');

bitcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
