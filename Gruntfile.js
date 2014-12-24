module.exports = function (grunt) {
			grunt.initConfig({
  		
  		sass: {
    		dist: {
      		files: {
        		'css/tn.css': 'scss/tn.scss'
      		},
      		options: {
      			sourcemap: 'none'
      		},
      	}
  		},
  		
  		watch: {
    		sass: {
      		files: ['scss/*/*.scss'],
      		tasks: ['sass'],
    		},
    	},
    	
    	notify_hooks: {
    		options: {
      		enabled: true,
      		title: "Grunt tasks completed",
      		success: true,
      		duration: 5
    		}
  		}	  		
  });
  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

	grunt.registerTask('default', ['sass', 'watch']);
	grunt.task.run('notify_hooks');
};
