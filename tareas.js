'use strict'
/*

//ACTIVIDAD MODULO 1


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


//5. Realizar un algoritmo que calcule el salario de un empleado según los siguientes parámetros.
//      a.Si gana menos de 699.999, Descuento de pensión =2%, y más un Aux. de transporte= 6%.
//      b. Si gana entre 700.000 y 999.999, Descuento de pensión =4%, Subsidio familiar = 12.000, sino le pagan el mismo salario.
//      c. Si gana más del millón Descuento de pensión =6%.

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


//ACTIVIDAD MODULO 2


// 1. Realizar un programa que permita generar 100 números e imprimir solo los números pares.

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}


// 2. Realizar un programa que permita sumar los 150 primeros números.

let sumaTotal = 0;
for (let i = 1; i <= 150; i++) {
    sumaTotal = sumaTotal + i;
}
console.log(sumaTotal);


// 3. Leer 10 precios de productos y calcular cuánto cuestan los 10 productos.

let precioTotal = 0;
for(let i = 1; i <= 10; i++){
let precio = parseFloat(prompt ('Por favor ingrese el precio del producto No. '+i));
precioTotal += precio;
}
console.log(`El precio total de los 10 producto es de ${precioTotal} pesos`);


// 4. Leer 12 notas de estudiantes y determinar cuántas aprobó y cuantas reprobó, dado un rango 0 a 10, reprueba cuando la nota está entre 0 y 5.

let reprueba = 0;
let aprueba = 0;
for(let i = 1; i <= 12; i++){
let nota = parseFloat(prompt ('Por favor ingrese la nota del estudiante No. '+i));
if(nota>=0 && nota<=5){
reprueba++;
}   else{
        if(nota>5 && nota<=10){
        aprueba++;
    }else{
        alert('Por favor ingrese un rango de nota correcta (Entre 0 - 5)');
        i--;
    }
}
}
console.log(`${reprueba} estudiantes reprobaron la materia y ${aprueba} aprobaron la materia`);


// 5. Leer los primeros 50 números y contar cuantos múltiplos de 3 hay, imprimir la cantidad.

function leer(numero) {    
    let multiplode3 = 0;
    for (let i = 0; i <= numero; i++) {
        if (i % 3 == 0) {
            multiplode3++;
        }
    }
    return multiplode3;
}
console.log(`En los primeros 50 números, hay ${leer(50)} múltiplos de 3.`)


// 6. Leer n cantidad de notas de un estudiante e imprimir por pantalla.

const arrayNotas = [];
let cantidad = prompt('Por favor registre la cantidad de notas a ingresar de un estudiante');
for (let i = 1; i <= cantidad; i++) {
    const nota = parseFloat(prompt(`Ingrese la nota No. ${i} del estudiante:`));
    arrayNotas.push(nota);
}
console.log(`Las notas ingresadas por el usuario del estudiante son:`)
for (let i = 0; i < cantidad; i++) {
    console.log(`Nota No. ${i + 1}: ${arrayNotas[i]}`);
}


// 7. Leer n cantidad números y determinar cantidad de impares, imprimir cantidad de impares.

function leerNumeros(){
const arrayImpares = [];
let sumaImpar = 0;
let cantidad = prompt('Por favor registre la cantidad de números a ingresar');
for (let i = 1; i <= cantidad; i++) {
    const numero = parseFloat(prompt(`Ingrese el valor del número No. ${i}:`));
    if(numero % 2 !== 0){
    arrayImpares.push(numero);
    sumaImpar ++;
}
}
console.log('La cantidad de números impares ingresados fueron:', sumaImpar);
console.log(`Los números impares ingresados fueron: ${arrayImpares}`);
}
leerNumeros();

*/