module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJson('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/js/vendor/*.js','src/js/*.js']
			}
		}
	});
}