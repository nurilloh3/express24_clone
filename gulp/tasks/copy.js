export const copy = function(){
    return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
}