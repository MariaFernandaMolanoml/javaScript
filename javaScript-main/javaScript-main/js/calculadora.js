function sumar(n1, n2) {
    // Obtiene un elemento HTML con el id "resultado".
    var res = document.getElementById("resultado");
    // Realiza la suma de n1 y n2.
    var resultado = n1 + n2;
    // Muestra un elemento HTML con el id "respuesta".
    respuesta.style.display = "block";
    // Actualiza el contenido del elemento "res" con el resultado de la suma.
    res.innerHTML = `Total : ${resultado}`;
}
function restar(n1, n2) {
    // Obtiene un elemento HTML con el id "resultado".
    var res = document.getElementById("resultado");

    // Realiza la resta de n1 y n2.
    var resultado = n1 - n2;

    // Muestra un elemento HTML con el id "respuesta".
    respuesta.style.display = "block";

    // Actualiza el contenido del elemento "res" con el resultado de la resta.
    res.innerHTML = `Total : ${resultado}`;
}

function multiplicar(n1, n2) {
    // Obtiene un elemento HTML con el id "resultado".
    var res = document.getElementById("resultado");

    // Realiza la multiplicación de n1 y n2.
    var resultado = n1 * n2;

    // Muestra un elemento HTML con el id "respuesta" (esto podría ser un error tipográfico).
    respuesta.style.display = "block";

    // Actualiza el contenido del elemento "res" con el resultado de la multiplicación.
    res.innerHTML = `Total : ${resultado}`;
}

function dividir(n1, n2) {
    // Obtiene un elemento HTML con el id "resultado".
    var res = document.getElementById("resultado");

    // Realiza la división de n1 entre n2.
    var resultado = n1 / n2;

    // Muestra un elemento HTML con el id "respuesta" (esto podría ser un error tipográfico).
    respuesta.style.display = "block";

    // Actualiza el contenido del elemento "res" con el resultado de la división.
    res.innerHTML = `Total : ${resultado}`;
}

function potencia(n1, n1) {
    // Obtiene un elemento HTML con el id "resultado".
    var res = document.getElementById("resultado");

    // Calcula la potencia de n1 elevado a sí mismo (n1 * n1).
    var resultado = n1 * n1;

    // Muestra un elemento HTML con el id "respuesta" (esto podría ser un error tipográfico).
    respuesta.style.display = "block";

    // Actualiza el contenido del elemento "res" con el resultado de la potencia.
    res.innerHTML = `Total : ${resultado}`;
}

    
//funcion para mostrar todos los casos y que funcionen las operaciones
    function mostrar() {
        event.preventDefault();
        let n1 = parseInt(document.getElementById("n1").value)
        let n2 = parseInt(document.getElementById("n2").value)
        let opc = parseInt(document.getElementById("opc").value)
          
            switch(opc){
                //caso de suma
                case 1:
                        sumar(n1,n2)
                        break;
                //caso de resta
                case 2:
                        restar(n1,n2)
                        break;
                //caso de multiplication
                case 3:
                    multiplicar(n1,n2)
                    break;
                //caso de division
                case 4:
                    dividir(n1,n2)
                    break;
                break;
                //caso de potenciacion
                case 5:
                    potencia(n1,n1)
                    break;
                break;
        
                // se establece un default para opciones no validas
                default:
                    alert(`Opcion no valida :)`);
                    break;
                }

        }