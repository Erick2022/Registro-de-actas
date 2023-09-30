import Swal from 'sweetalert2';

function mostrarAlerta() {
    var resultDetails = 'Detalles:';
    var suma = 0;

    for (var i = 1; i <= 9; i++) {
        var inputId = 'input' + i;
        var inputField = document.getElementById(inputId);
        var inputValue = parseInt(inputField.value) || 0;
        suma += inputValue; // Suma el valor actual al total
        // Obtén el texto del <label> correspondiente
        var labelForInput = document.querySelector('label[for="' + inputId + '"]').textContent;

        // Agrega los detalles de cada valor del formulario con el texto del <label>
        detalles += labelForInput + ': ' + inputValue + '\n';
    }
    resultDetails += 'Suma Total; ' + suma;
    Swal.fire({
        title: 'Detalles de la suma',
        html:  detalles,
        icon: 'info',
        customClass: {
            content: 'my-custom-alert',
        },
    });
    var now = new Date();
    var fechayhora = document.getElementById('fechayhora');

    fechayhora.innerHTML = 'Fecha y Hora' + now.toLocaleString();
}
// Agrega un controlador de eventos al botón "CALCULAR"
document.getElementById('buttonCalcular').addEventListener('click', function () {
    calcularSuma(); // Primero llama a calcularSuma()
    mostrarAlerta(); // Luego llama a mostrarAlerta()
});




