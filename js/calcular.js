
function calcular(){ // Definicion de una funcion llamada calcular

    var operacion = parseInt(prompt("Selecciona una operacion:\n 1.Suma\n 2.Resta\n 3.Multiplicacion\n 4.Division\n 5.Cual es mayor")); // Solicitamos al usuario que seleccione una operacion
    
    switch (operacion) { // Utilizar un switch para manejar las diferentes opciones
        case 1:
             // Solicitar dos números y calcular la suma
            var num1 = parseFloat(prompt("Ingresa el primer numero:"));
            var num2 = parseFloat(prompt("Ingresa el segundo numero:"));
            var resultado = num1 + num2;
            alert("El resultado de la suma es: " + resultado);
            break;

        case 2:
             // Solicitar dos números y calcular la resta
            var num1 = parseFloat(prompt("Ingresa el primer numero:"));
            var num2 = parseFloat(prompt("Ingresa el segundo numero:"));
            var resultado = num1 - num2;
            alert(`El resultado de la resta es: ${resultado}`);
            break;

        case 3:
             // Solicitar dos números y calcular la multiplicacion
            var num1 = parseFloat(prompt("Ingresa el primer numero:"));
            var num2 = parseFloat(prompt("Ingresa el segundo numero:"));
            var resultado = num1 * num2;
            alert(`El resultado de la multiplicacion es: ${resultado}`);
            break;

        case 4:
             // Solicitar dos números y calcular la division
            var num1 = parseFloat(prompt("Ingresa el primer numero:"));
            var num2 = parseFloat(prompt("Ingresa el segundo numero:"));
            var resultado = num1 / num2;
            alert(`El resultado de la division es: ${resultado}`);
            break;

        case 5:
             // Solicitar dos números y calcular el numero mayor, tambien condicione para ver que numeros son iguales
            var num1 = parseFloat(prompt("Ingresa el primer numero:"));
            var num2 = parseFloat(prompt("Ingresa el segundo numero:"));
            if (num1 > num2) {
            alert(`Su numero mayor es: ${num1}`);
            }else if (num1 < num2) {
            alert(`Su numero mayor es: ${num2}`);
            }else if (num1 == num2) {
            alert("Ambos numeros son iguales");}
            break;

        // Mostrar un mensaje de error si se selecciona una opción no válida
        default:
        alert("Opcion no valida.");
} 
}