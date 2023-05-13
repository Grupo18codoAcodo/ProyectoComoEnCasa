document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento del contador
    var contador = document.querySelector('.producto-contador');
  
    // Obtener los botones de incremento y decremento
    var botonMas = contador.querySelector('.button-contador:not(.no-active)');
    var botonMenos = contador.querySelector('.button-contador.no-active');
  
    // Obtener el input de número
    var inputNumero = contador.querySelector('.producto-numero');
  
    // Establecer el límite del contador
    var limite = 10;
  
    // Función para incrementar el valor del contador
    botonMas.addEventListener('click', function() {
      var valor = parseInt(inputNumero.value);
      if (valor < limite) {
        valor++;
        inputNumero.value = valor;
        botonMenos.disabled = false;
      }
      if (valor === limite) {
        botonMas.disabled = true;
      }
    });
  
    // Función para decrementar el valor del contador
    botonMenos.addEventListener('click', function() {
      var valor = parseInt(inputNumero.value);
      if (valor > 1) {
        valor--;
        inputNumero.value = valor;
        botonMas.disabled = false;
      }
      if (valor === 1) {
        botonMenos.disabled = true;
      }
    });
  });
  