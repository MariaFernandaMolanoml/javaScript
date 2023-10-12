function mostrar(){ // Definicion de una funcion llamada mostrar

    
var opcion = parseInt(prompt("Selecciona una figura:\n1. Cuadrado\n2. Triangulo\n3. Rectangulo")); // Solicitamos al usuario que seleccione una figura

switch (opcion) { // Utilizar un switch para manejar las diferentes opciones
    case 1:
        var lado = parseFloat(prompt("Ingresa la longitud de un lado del cuadrado:")); // Solicitar la longitud de un lado del cuadrado
        var areaCuadrado = lado * lado;// Calcular el area del cuadrado
        if(lado!=0 && areaCuadrado!=0){  // Verificar si los valores ingresados son validos
            alert(`El area del cuadrado es: ${areaCuadrado}`);// Mostrar el area del cuadrado
        } else{
            alert(`Ingresa un valor valido`); // Mostrar un mensaje de error si los valores no son validos
        }
        break;

    case 2:
        var base = parseFloat(prompt("Ingresa la base del triangulo:")); // Solicitar la base y la altura del triangulo
        var altura = parseFloat(prompt("Ingresa la altura del triangulo:"));
        var areaTriangulo = (base * altura) / 2; //Calcular el area del triangulo
        if (base!=0 && altura!=0){// Verificar si los valores ingresados son validos
            alert(`El area del triangulo es:  ${areaTriangulo}`); //Mostrar el area del triangulo
        } else {
            alert(`Ingrese un valor valido`) // Mostrar un mensaje de error si los valores no son validos
        }
        break;

    case 3:
        var ancho = parseFloat(prompt("Ingresa el ancho del rectangulo:")); // Solicitar el ancho y la altura del rectangulo
            var altura = parseFloat(prompt("Ingresa la altura del rectangulo:"));
            var areaRectangulo = ancho * altura; //Calcular el area del rectangulo
            
            if (ancho!=0 && altura!=0){ // Verificar si los valores ingresados son validos
                alert(`El area del rectangulo es: ${areaRectangulo}`);//Mostrar el area del rectangulo
            } else {
                alert(`Ingrese un valor valido`) // Mostrar un mensaje de error si los valores no son validos
            }
        break;        
                 
// Mostrar un mensaje de error si se selecciona una opción no valida
    default:
        alert("Opcion no valida.");
}
}