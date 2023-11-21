nacimiento=parseInt(prompt("Ingrese tu año de"))


const fecha= new Date();
const fechaActual=fecha.getFullYear();
let edad= fechaActual-nacimiento;

var nombres=prompt("Ingrese tu nombre");


if(edad >= 0 && edad <= 8){
    document.write(`Bienvenido ${nombres} usted tiene ${edad} años de edad y eres un niño pequeño`);
}else if(edad >= 8 && edad <= 18){
    document.write(`Bienvenido joven ${nombres} usted tiene ${edad} años de edad`);  
}else if(edad >= 18 && edad <= 100){
    document.write(`Bienvenido ${nombres} usted tiene ${edad} años de edad y eres un adulto`);
}else{
    document.write("Ingresa un año valido");
}



