
//获取gulp对象 
	 var gulp = require("gulp");
	

 
    var babel = require('gulp-babel'); //es6转es5
    var uglify = require('gulp-uglify'); //js压缩插件

	
	//定义任务
 

   //2  压缩js的插件------------
  
gulp.task('jsTask2', function(){
	gulp.src("js/ajax.js")
	.pipe(babel({"presets": ["es2015"]})) //es6转es5
	.pipe(uglify()) //js压缩
	.pipe(gulp.dest("gulps/js"));
});




 




    //默认(执行)任务
    gulp.task("default",  ["jsTask2"]);
       
    
    
   
















