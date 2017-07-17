var gulp = require('gulp');
var child_process = require('child_process');

// The protractor task
var protractor = require("gulp-protractor").protractor;

// Setting up the test task
gulp.task('protractor', function(cb) {
	var argv = process.argv.slice(3);
	var config = argv.filter(function(item) {
		return item.indexOf('--env') > -1;
	}).map(function (item) {
		return item.split('=').pop();
	}).pop();
	var configPath = 'protractor.conf.js';
	switch (config) {
		case 'common': configPath = 'protractor.conf.js'; break;
		case 'mobile': configPath = 'protractorMM.conf.js'; break;
	}
	
	child_process.spawn('protractor', [configPath].concat(argv), {
         stdio: 'inherit'
    }).once('close', cb);;
});