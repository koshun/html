module.exports = function(grunt){

grunt.initConfig({
	less:{
		options:{
			expand: true,
			compress: true,
			syncImport:true,
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
		coffeetask:{
			files:['coffee/*.coffee'],
			tasks: ['coffeetask'],
			options:{
				livereload:true,
			},
		},
		styles:{
			files:['style.css'],
			tasks: ['autoprefixer'],
		}
},
	//concat:{
	//	dist:{
		//	src:['css/*.css'], //Источник и файлы для конкатенации
	//		dest: 'dist/css/all.css'
	//	},
	//},
	coffee:{
		options:{
			bare:true
		},
		scripts:{ //Этот блок может називатся как угодно (target - цель)
			expand: true,//Устанавливает возможность работы следующих за ним опций.
		    flatten: true,//удаляет части пути внутри файла.
		    cwd: 'coffee/',//Откуда
		    src: ['*.coffee'], //Расширение компилируемого файла
		    dest: 'js/coffee/', //Куда
			ext: '.js'//Расширение после компиляции
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
grunt.loadNpmTasks('grunt-contrib-coffee');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-newer');

grunt.registerTask('process',['newer:less']);
grunt.registerTask('coffeetask',['newer:coffee']);
grunt.registerTask('default',['less','autoprefixer','watch']);
};