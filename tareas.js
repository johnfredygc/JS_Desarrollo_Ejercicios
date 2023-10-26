'use strict'

// 1. Realizar el algoritmo que convierta litros en centilitros, decilitros, galones y onzas.

let respuesta;
let mensaje = "";
const litros = parseFloat(prompt ('Ingrese el valor de la unidad en litros a convertir'));
const opcion = prompt ('Seleccione mediante el número indicado, el volumen a convertir: \n1. Centilitros \n2. Decilitros \n3. Galones \n4. Onzas');

switch (parseInt(opcion)){
    case 1:
        respuesta = litros * 100;
        mensaje = `${litros} litros es igual a ${respuesta} centilitros`;
        break;
    case 2:
        respuesta = litros * 10;
        mensaje = `${litros} litros es igual a ${respuesta} decilitros`;
        break;
    case 3:
        respuesta = litros * 0.264172;
        mensaje = `${litros} litros es igual a ${respuesta} galones`;
        break;
    case 4:
        respuesta = litros * 33.8140159999037;
        mensaje = `${litros} litros es igual a ${respuesta} onzas`;
        break;

    default:
        mensaje = `Por favor seleccione de manera correcta el rango de volumen establecido en el mensaje expuesto a convertir`;        
}
    console.log(mensaje);


// 2. Realizar el algoritmo que realice las 4 operaciones básicas para dos números de entrada.

const numero1 = parseFloat(prompt ('Ingrese el primer número a operar'));
const numero2 = parseFloat(prompt ('Ingrese el segundo número a operar'));
let suma, resta, multiplicacion, division;

suma = numero1 + numero2;
console.log(`La suma entre ${numero1} y ${numero2} es: ${suma}`);
resta = numero1 - numero2;
console.log(`La resta entre ${numero1} y ${numero2} es: ${resta}`);
multiplicacion = numero1 * numero2;
console.log(`La multiplicción entre ${numero1} y ${numero2} es: ${multiplicacion}`);
division = numero1 / numero2;
console.log(`La división entre ${numero1} y ${numero2} es: ${division}`);


// 3. Realizar el algoritmo que convierta grados centígrados en Fahrenheit y viceversa.

let opcion = prompt ('Seleccione la opción a realizar: \n1. Convertir de Grados Centígrados a Grados Fahrenheit \n2. Convertir de Grados Fahrenheit a Grados Centígrados');
let resultado;

if(opcion==1){    
    const gradosCentigrados = parseFloat(prompt ('Ingrese el valor en Grados Centígrados a convertir:'));
    resultado = (gradosCentigrados * (9/5)) + 32;
    console.log(`${gradosCentigrados} Grados Centígrados equivalen a ${resultado} Grados Fahrenheit`);
} else{
    if(opcion==2){
    const gradosFahrenheit = parseFloat(prompt ('Ingrese el valor en Grados Fahrenheit a convertir:'));
    resultado = (gradosFahrenheit - 32) * (5/9);
    console.log(`${gradosFahrenheit} Grados Fahrenheit equivalen a ${resultado} Grados Centígrados`);
    }
    else{
        console.log('Por favor ingrese una selección corecta de acuerdo a lo expuesto en la casilla de opciones');
    }
}


// 4. Realizar el algoritmo que calcule el valor a pagar por algunos galones de gasolina si sabemos que cada centilitro cuesta 25 pesos. Imprimir el valor a pagar y la cantidad de gasolina despachada en litros.

const cantidad = parseFloat(prompt('Por favor ingrese la cantidad de galones de gasolina a suministrar'));

const cantidadLitros = cantidad / 0.264171;
const cantidadCentilitros = cantidadLitros * 100;
const valorPagar = cantidadCentilitros * 25;

console.log(`Su valor a pagar es de ${valorPagar} pesos y la cantidad suministrada fue de ${cantidadLitros} litros`);



/* 5. Realizar un algoritmo que calcule el salario de un empleado según los siguientes
parámetros.
a.Si gana menos de 699.999, Descuento de pensión =2%, y más un Aux. de transporte= 6%.
b. Si gana entre 700.000 y 999.999, Descuento de pensión =4%, Subsidio familiar = 12.000,
sino le pagan el mismo salario.
c. Si gana más del millón Descuento de pensión =6%.*/

const gana = parseFloat(prompt('Ingrese el valor en pesos que gana el empleado'));
let mensaje = "";
let descuento, auxTrasporte, salarioPagar;

switch (true){
    case gana >=0 && gana <= 699999:
        descuento = (gana*2)/100;        
        auxTrasporte = (gana*6)/100;        
        salarioPagar = gana - descuento + auxTrasporte; 
        mensaje = `El salario del empleado es de ${salarioPagar} pesos`;
        break;
    case gana >=700000 && gana <= 999999:
        descuento = (gana*4)/100;               
        salarioPagar = gana - descuento + 12000; 
        mensaje = `El salario del empleado es de ${salarioPagar} pesos`;
        break;
    case gana == 1000000:
        mensaje = `El salario del empleado es de ${gana} pesos`;
        break;
    case gana >1000000:
        descuento = (gana*6)/100;               
        salarioPagar = gana - descuento; 
        mensaje = `El salario del empleado es de ${salarioPagar} pesos`;
        break;
    default:
        mensaje = `Por favor ingrese un valor establecido dentro del rango`;        
}
    console.log(mensaje);