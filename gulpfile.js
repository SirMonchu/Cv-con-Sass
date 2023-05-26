const gulp = require('gulp');
const sass = require('gulp-sass');
const sassdoc = require('sassdoc');
const concat = require('gulp-concat');

// Tarea para generar la documentación con Sassdoc
gulp.task('docs', function() {
  return gulp.src('src/**/*.scss')
    .pipe(sassdoc())
    .resume();
});

// Tarea para generar el archivo .css a partir del archivo .scss general
gulp.task('css', function() {
  return gulp.src('src/general.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/'));
});

// Tarea para copiar todas las imágenes a la carpeta dist/img
gulp.task('images', function() {
  return gulp.src('src/img/**/*')
    .pipe(gulp.dest('dist/img/'));
});

// Tarea por defecto que ejecuta en paralelo la generación de documentación, el CSS y la copia de imágenes
gulp.task('default', gulp.parallel('docs', 'css', 'images', function() {
  // Copiar la documentación generada a la carpeta dist/
  gulp.src('sassdoc/**/*')
    .pipe(gulp.dest('dist/'));

  // Copiar el archivo .html y el archivo .css generado a la carpeta dist/
  gulp.src(['*.html', 'dist/general.css'])
    .pipe(gulp.dest('dist/'));
}));
