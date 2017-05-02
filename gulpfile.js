const gulp = require('gulp')
const gulp_concat = require('gulp-concat')
gulp.task('concatJSFiles',()=>{
    gulp.src(['./client/ShapedImage.js','./client/CircleShapedImage.js','./client/TriangleShapedImage.js','./client/CircleShapedImage.js','./client/ShapedImageFactory.js']).pipe(gulp_concat('shaped-image.js')).pipe(gulp.dest('dist')).pipe(gulp.dest('test'))
})
gulp.task('default',['concatJSFiles'])
