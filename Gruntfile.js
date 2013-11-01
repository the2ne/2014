'use strict';

module.exports = function(grunt) {
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		htmlhint: {
			build: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'doctype-first': true,
					'spec-char-escape': true,
					'id-unique': true,
					'style-disabled': true
				},
				src: ['index.html']
			}
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		watch: {
			html: {
				files: ['index.html','mentions-legales.html'],
				tasks: ['htmlhint']
			},
			css: {
				files: ['sass/*.scss'],
				tasks: ['compass:dist']
			}
		}
	});

	grunt.registerTask('default', ['htmlhint', 'compass', 'watch']);

};