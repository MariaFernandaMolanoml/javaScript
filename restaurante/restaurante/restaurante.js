function mostrar() {
    event.preventDefault(); // Evita el recargue de la pagina

    // Entrada
    const aC = 11000;
    const cP = 10000;
    const pC = 12000;

    // Cazuelas
    const cC = 25000;
    const cM= 30000;
    const cL= 28000;

    // Ceviche
    const cDC = 15000;
    const cDP = 30000;
    const cDL = 20000;

    //bebidas
    const fB = 10000;
    const lN =7000;
    const G= 2000;

    // Obtener la cantidad y las opciones seleccionadas
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let menu = parseInt(document.getElementById("menu").value);
    let cantidad2 = parseInt(document.getElementById("cantidad2").value);
    let menu2 = parseInt(document.getElementById("menu2").value);
    let cantidad3 = parseInt(document.getElementById("cantidad3").value);
    let menu3 = parseInt(document.getElementById("menu3").value);
    let cantidad4 = parseInt(document.getElementById("cantidad4").value);
    let menu4 = parseInt(document.getElementById("menu4").value);

    // Variable para almacenar el resultado
    let resultado = 0;

    if ((cantidad > 0 && menu > 0) || (cantidad2 > 0 && menu2 > 0) || (cantidad3 > 0 && menu3 > 0) || (cantidad4 > 0 && menu4 > 0)) {
        respuesta.style.display = "block";

        // Calculos entradas
        if (cantidad > 0) {
            switch (menu) {
                case 1:
                    resultado += aC * cantidad;
                    break;
                case 2:
                    resultado += cP * cantidad;
                    break;
                case 3:
                    resultado += pC * cantidad;
                    break;
                default:
                    alert(`La opcion de entrada no valida, ingresa una nuevamente`);
            }
        }

        //Calculos para cazuela

        if (cantidad2 > 0) {
            switch (menu2) {
                case 1:
                    resultado += cC * cantidad2;
                    break;
                case 2:
                    resultado += cM * cantidad2;
                    break;
                case 3:
                    resultado += cL * cantidad2;
                    break;
                default:
                    alert(`La opcion de ecazuela no es valida, ingresa una nuevamente`);
            }
        }
        // Calculos para ceviche
        if (cantidad3 > 0) {
            switch (menu3) {
                case 1:
                    resultado += cDC * cantidad3;
                    break;
                case 2:
                    resultado += cDP * cantidad3;
                    break;
                case 3:
                    resultado += cDL * cantidad3;
                    break;
                default:
                    alert(`La opcion de ceviche no es valida, ingresa una nuevamente`);
            }
        }

        //Calculos para bebidas
        if (cantidad4 > 0) {
            switch (menu4) {
                case 1:
                    resultado += fB * cantidad4;
                    break;
                case 2:
                    resultado += lN * cantidad4;
                    break;
                case 3:
                    resultado += G * cantidad4;
                    break;
                default:
                    alert(`La opcion de ceviche no es valida, ingresa una nuevamente`);
            }
        }

        
        document.getElementById("resultado").innerHTML = `Total : ${resultado}`;
    } else {
        respuesta.style.display = "block";
        document.getElementById("resultado").innerHTML = `Verifique sus datos`;
    }
}
