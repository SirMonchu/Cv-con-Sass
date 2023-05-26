// Tarea 'inicio': muestra un mensaje en la consola
gulp.task('inicio', function() {
  console.log('Generando proyecto CV');
});

// Tarea 'final': muestra un mensaje en la consola
gulp.task('final', function() {
  console.log('Proyecto CV generado');
});

// Tarea por defecto: copia archivos .html y .css a la carpeta dist/
gulp.task('default', function() {
  // Copiar archivos .html
  gulp.src('*.html')
    .pipe(gulp.dest('dist/'));

  // Copiar archivos .css
  gulp.src('*.css')
    .pipe(gulp.dest('dist/'));
});
