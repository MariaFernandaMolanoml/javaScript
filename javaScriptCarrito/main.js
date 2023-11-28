//PRODUCTOS
//libro Ryuk
costo = 62900
costoYuumi = 54900


let contador=0;
let contador2=0;
const valor=document.getElementById("valor")
const valor2=document.getElementById("valor2")
const vtotal=document.getElementById("valorRyuk")
const vtotalY = document.getElementById("valorYuumi")

function incremento(){
    contador+=1;
    valor.innerHTML=contador;
    if(contador>0){
        totalCosto=costo * contador;
        valorRyuk.innerHTML =totalCosto;
    }
   
}
function decremento(){
    if(contador>0){
    contador-=1;
    valor.innerHTML=contador;
    totalCosto= totalCosto - costo;
    valorRyuk.innerHTML =totalCosto;
    }else{
        contador=0;
        valor.innerHTML=contador;
    }
}     
function resetear(){
    contador=0;
    valor.innerHTML=contador;
    totalCosto = 0;
    valorRyuk.innerHTML =totalCosto;
}
//DUPLICADO DEL CONTADOR
function incremento2(){
    contador2+=1;
    valor2.innerHTML=contador2;
    if(contador2>0){
        totalCostoY=costoYuumi * contador2;
        valorYuumi.innerHTML =totalCostoY;
    }
   
}
function decremento2(){
    if(contador2>0){
    contador2-=1;
    valor2.innerHTML=contador2;
    totalCostoY= totalCostoY - costoYuumi;
    valorYuumi.innerHTML =totalCostoY;
    }else{
        contador2=0;
        valor2.innerHTML=contador2;
    }
}     
function resetear2(){
    contador2=0;
    valor2.innerHTML=contador2;
    totalCostoY = 0;
    valorYuumi.innerHTML =totalCostoY;
}

