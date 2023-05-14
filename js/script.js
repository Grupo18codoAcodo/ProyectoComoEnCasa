//+++++++++++++++++Me creo el boton de comprar++++++++++++++++++
let botonParaPedir=`
<div class="producto-contador">
<button class="button-contador no-active">-</button>
<input type="text" readonly class="producto-numero" value="0">
<button class="button-contador">+</button>
</div>`
document.querySelector("BotonPedir").innerHTML=botonParaPedir;
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




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
    var valor = 0;
  
    // Función para incrementar el valor del contador
    botonMas.addEventListener('click', function() {
      if (valor < limite) {
        valor++;
        inputNumero.value = valor;
      }
    });
  
    // Función para decrementar el valor del contador
    botonMenos.addEventListener('click', function() {
      if (valor > 0) {
        valor--;
        inputNumero.value = valor;        
      }
    });
  });
  