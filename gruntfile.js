/*!
 * Bootstrap's Gruntfile
 * http://getbootstrap.com
 * Copyright 2013-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };


// Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * IASD Bootstrap v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',
    
    //jqueryCheck: 'if (typeof jQuery === \'undefined\') { throw new Error(\'IASD   Bootstrap\\\'s JavaScript requires jQuery\') }\n\n',

    // Task configuration.
    clean: {
      dist: ['dist', 'docs/dist']
    },

    //jshint
    //jscs
    

    concat: {
      options: {
        banner: '<%= banner %>\n',
        stripBanners: false
      },
      iasdbootstrap: {
        src: [
          'templates/project/lib/modernizr.js',
          'templates/project/lib/bootstrap.min.js',
          'templates/project/lib/owl.carousel.js',
          'templates/project/lib/iasd_dropdown_nav.js',
          'templates/project/lib/iasd_dropdown_nav.js',
          'templates/project/lib/iasd_footer.js',
          'templates/project/lib/iasd_global_nav.js',
          'templates/project/lib/iasd_main_nav.js',
          'templates/project/lib/iasd_plugins.js',
          'templates/project/lib/iasd_widgets.js',
        ],
        dest: 'dist/lib/<%= pkg.name %>.js'
      },
      ltie9 : {
        src: [
          'templates/project/lib/html5shiv.js',
          'templates/project/lib/respond.min.js'
        ],
        dest: 'dist/lib/ltie9.js'
      }

    },

    uglify: {
      options: {
        report: 'min'
      },
      iasdbootstrap: {
        options: {
          banner: '<%= banner %>'
        },
        src: '<%= concat.iasdbootstrap.dest %>',
        dest: 'dist/lib/<%= pkg.name %>.min.js'
      },
      ltie9: {
        src: 'dist/lib/ltie9.js',
        dest: 'dist/lib/ltie9.min.js'
      }
     
    },  

    //qunit

    copy: {
      fonts: {
        expand: true,
        cwd: 'templates/project/fonts/',
        src: '**',
        dest: 'dist/fonts'
      },
      img: {
        expand: true,
        cwd: 'templates/project/img/',
        src: '**',
        dest: 'dist/img'
      },
      compassjs : { //require concat
        expand:true,
        cwd: 'dist/lib',
        src: '**',
        dest: 'templates/project/lib/'
      }
    },


    compass: {
      iasdbootstrap: {
        options: {
          config: 'config-dist.rb',
          bundleExec : true,
          outputStyle: 'expanded',
        }
      },
      docs: {
        options: {
          config: 'config.rb',
          bundleExec : true,
          outputStyle: 'expanded',
        }
      }
    },

    //csslint

    cssmin: {
      options: {
        keepSpecialComments: '*',
        noAdvanced: true, // turn advanced optimizations off until the issue is fixed in clean-css
        report: 'min',
        compatibility: 'ie8'
      },
      iasdbootstrap: {
        src: [
          'dist/css/<%= pkg.name %>.css'
        ],
        dest: 'dist/css/<%= pkg.name %>.min.css'
      }
    },

    usebanner: {
      options: {
        position: 'top',
        banner: '<%= banner %>'
      },
      files: {
        src: 'dist/css/*.css'
      }
    },

    //csscomb

    compress: {
      dist: {
        options: {
          archive: '<%= pkg.name %>-<%= pkg.version %>.zip'
        },
        files: [
          {expand: true, cwd: 'dist/', src: ['**'], dest: ''}, // makes all src relative to cwd
        ]
      }
    }

    //connect
    //jekyll
    //jade
    //validation
    //watch
    //sed
    //sauce labs
    //exec

 
  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);

  // Generate concatenated and minified js to be distributed via compass install
  grunt.registerTask('compass-js', ['concat', 'uglify', 'copy:compassjs']);

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify']);

  // CSS distribution task.
  // grunt.registerTask('less-compile', ['less:compileCore', 'less:compileTheme']);
  // grunt.registerTask('dist-css', ['less-compile', 'autoprefixer', 'cssflip', 'usebanner', 'csscomb', 'less:minify', 'cssmin']);
  grunt.registerTask('dist-css', ['copy:fonts', 'copy:img', 'compass', 'cssmin']);

  // Docs distribution task.
  grunt.registerTask('dist-docs', 'copy:docs');

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-css', 'dist-js', 'compress']);

  // Default task.
  grunt.registerTask('default', [ 'dist']);

  // Version numbering task.
  // grunt change-version-number --oldver=A.B.C --newver=X.Y.Z
  // This can be overzealous, so its changes should always be manually reviewed!
  grunt.registerTask('change-version-number', 'sed');

};