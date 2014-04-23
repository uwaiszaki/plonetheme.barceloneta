module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dist: {
                options: {
                    paths: ['bower_components/...'],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '++resource++plonetheme.barceloneta/barceloneta.css.map',
                    sourceMapFilename: 'plonetheme/barceloneta/static/barceloneta.css.map'
                },
                files: {
                    'plonetheme/barceloneta/static/barceloneta.css': 'less/barceloneta.less'
                }
            }
        },
        copy: {
              barceloneta: {
                files: [
                  { expand: true, cwd: 'images/', src: 'barceloneta-*', dest: 'plonetheme/barceloneta/static/' },
                  { expand: true, cwd: 'fonts/', src: 'barceloneta-*', dest: 'plonetheme/barceloneta/static/' }
                ]
              }
            },
        sed: {
          'barceloneta-images': {
            path: 'plonetheme/barceloneta/static/barceloneta.css',
            pattern: 'url\\(\'images/barceloneta-',
            replacement: 'url(\'++resource++plonetheme.barceloneta-'
          },
          'barceloneta-fonts': {
            path: 'plonetheme/barceloneta/static/barceloneta.css',
            pattern: 'url\\(\'fonts/barceloneta-',
            replacement: 'url(\'++resource++plonetheme.barceloneta-'
          }
        },
        watch: {
            scripts: {
                files: ['less/*.less',],
                tasks: ['less', 'sed']
            }
        }
    });

    // grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sed');
    grunt.registerTask('default', ['watch']);
};