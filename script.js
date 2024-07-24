/* ciclos  */

/*  for  */
/*     for(inicio; termino; salto){
    bloque de instrucciones
} */
for(var i = 0 ; i < 10 ;  i = i + 1){
    console.log(`repeticion numero ${i}`);
}
/* while */
/*     while(condicional){
    bloque de instrucciones
    } *//* 
identificar si un numero es par o impar, se debe solicitar numero hasta que ingrese un impar */}

var numero = prompt('ingresa un numero');
var estado = true;
while(estado == true){
    if (numero % 2 == 1) {
        estado = false;
    }else {
        numero = prompt('ingresa un numero')
    }
}
/* do while
    do{
        bloque de instrucciones
    }while(condicional); 
 */
do{
    var numero = prompt('ingresa un numero');
    var estado = true;
    if(numero % 2 ==1){
        estado == false;
    }
}while (estado == true);




