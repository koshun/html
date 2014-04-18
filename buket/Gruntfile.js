module.exports = function(grunt){

grunt.initConfig({
	less:{
		options:{
			expand: true,
			//compress: true,
			//syncImport:true,
		},
		scripts:{ 
			files:{
				'css/style.css' : ['less/style.less']
			},
		},
	},
	watch: {
		options:{
			livereload:true,
		},
	  scripts: {
	    files: ['less/*.less'],//Следить за этими файлами
	    tasks: ['process'],//Вызывать эту задачу
	    options: {
	      livereload: true,//Перезагружать страницу в браузере автоматически
    },
  },
		styles:{
			files:['style.css'],
			tasks: ['autoprefixer'],
		},
},
	concat:{
		dist:{
			src:['css/*.css'], //Источник и файлы для конкатенации
			dest: 'style.css'
		},
	},
	autoprefixer:{//Создаёт автопрефиксы для плохоподдерживаемых свойств css
		dist: {
			files:{
				'css/style.css' : 'css/style.css',
			},
    	},
	}
});

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-newer');

grunt.registerTask('process',['newer:less','concat','autoprefixer']);
grunt.registerTask('default',['less','autoprefixer', 'concat', 'watch']);
};