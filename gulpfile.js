var gulp = require('gulp'),
		browserSync = require('browser-sync');

gulp.task('browser-sync',function(){
	browserSync({
		server: { baseDir:"./" },
		notify: false
	});
});

gulp.task("watch", function(){
	gulp.watch(['*.html','*.js','*.css'],browserSync.reload);
}) 

gulp.task('default', gulp.parallel('browser-sync', 'watch'));