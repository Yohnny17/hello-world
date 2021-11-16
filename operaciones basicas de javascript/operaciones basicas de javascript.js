//string = "cadena de texto"//
//number = 10//
//boleano = true//
//boleano=false//

//casos especiales de datos: Undefined, Null, Nan "nos habla de que la variable no esta definida o hay un error "
//ejemplo//

//undefined//

//let numero;//
//alert(numero)//

//se nos montrara en pantalla una ventana emergente que nos dice undefined debido a que no le hemos definido un valor y se puede interpretar como error, pero no lo es; es simplemente que//
//nos dice que la variable existe, pero que no se a definido su valor.



//Null//

//let numero = null;// 

//nos dice que la variable esta vacia pero esto a diferencia del undefined es que null es intencional es decir que a la variables se le da el valor de nula.//
//ejemplo://



//Nan//

//let numero = 5;//
//let numero = 6;//

//alert(numero + numero2)//

//se nos muestra en pantalla la suma de de las dos variables//

//let numero = 5;//
//let numero = "pedro";//

//alert(numero + numero2)//

//se nos mostrara en pantalla una ventana emergente que nos dice 5pedro, pero esto es concadenar.//

//let numero = 5;//
//let numero = "pedro"//

//alert(numero * numero2)//

//se nos mostrara en pantalla una ventana emergente que nos dice NaN (No at Number);es decir que no es un numero, esto sucede porque al intentar hacer una operacion y resulta que uno de los valores no es un numero.//




//la variable se puede: declarar, inicializar, y se puede modificar a lo largo del tiempo.//
//var//
//let//
//const//

//var numero = 15;

//let nos limita el alcance a el bloque en el que se ejecuta//


//const es una constante que quiere decir que no cambia su valor cuando se ejecuta un comando. ejemplo un numero phi etc//



//pruebas con promt//

//prompt//

//es una de las APIs de java script que nos permite darle un dato.//

//prompt(Hola Yohnny)//

//Se nos mostrara en pantalla una ventana emergente que nos dice "Hola Yohnny" y debajo sale un cuadro de texto en el cual podemos responder//


//let nombre= prompt("Hola Yohnny")//

//alert(nombre)

// hara la misma accion mensionada anteriormente con la diferencia de que ahora lo que lo que respondimos quedara almacenda en la variable y se mostrara en pantalla//


let nombre = prompt("Dime Tu Nombre")

alert("hola" + nombre)

// se nos mostrara en pantalla una ventana emergente que nos solicita nuestro nombre el cual debajo tiene un cuadro de texto en donde podemos dar una respuesta; aceptamos
// y luego nos aparece otro ventana emergente que nos dice holaYohnny.

operadores 

//hay varios operadores, algunos de ellos son://

//-operadores de asignacion// 
//-operadores aritmeticos//


//operadores aritmeticos//

//toman valores numericos ( ya sean literales o variables) como sus operandos y retornan un valor numerico unico.//



//operadores de asignacion//
// asigna un valor al operando de la izquierda basado en el valor del operando de la derecha.
//ejemplo//

x = y //asignacion//



x += y //asignacion de adicion//

let numero = 10;

numero += 5;

document.write(numero)

//con document.write lo que hacemos es que el resultado se imprima en la pantalla, en este caso se dio la orden de que al valor de la variante se le adicionara 5//


x -= y //asignacion de sustraccion//

let numero = 10;

numero -= 5;

document.write(numero)

x *= y //asignacion de multiplicacion//

let numero = 10;

numero *= 5;

document.write(numero)

x /= y //asignacion de division//

let numero = 10;

numero /= 5;

document.write(numero)

x %= y // asignacion de residuo de division//

let numero = 10;

numero %= 5;

document.write(numero)

x **= y // asignacion de exponenciacion(potencia)//

let numero = 10;

numero **= 5;

document.write(numero)

x <<= y //asignacion a la izquierda//

x >>= y //asignacion a la derecha// 
x >>>= y //asignacion sin signo de desplazamiento a la derecha//
x &= y // asignacion AND//
x ^= y //asignacion XOR//
x |= y //asignacion OR//



//concatenacion//

//es unir strings// para concatenarse unen dos cadenas de texto//

cadena1 = "hola yohnny";
cadena2 = "¿como estas?";

resultado = saludo + pregunta;

document.write(resultado)

// en la pantalla se mostrara la union de esas dos cadenas de texto//

//para colocar concadenar numeros sin que se sumen se usa ""//
//ejemplo//

numero1 = 5;
numero2 = 8;

frase = "" + numero1 + numero2

document.write (frase)

//concat//
//es para los string, es un metodo de cadena//

numero1 = "5";
numero2= 8;

frase = numero1.concat(numero2)

document.write(frase)

//NOTA: solo se puede usar concat siempre y cuando haya una cadena de texto (string)//



nombre = "yohnny ospina";
frase = "soy" + nombre +"y estoy caminando";

document.write(frase);


//backticks//

nombre = "yohnny ospina";
frase = `soy ${nombre} y estoy caminando`;

document.write(frase);

//escape de comillas simples//
//escape de comillas dobles//


//escape de comillas dobles//

nombre = "yohnny ospina";

frase = 'minombre es "yohnny" y soy un crack'

document.write(frase)


//escape de comillas simples//

nombre = "yohnny ospina";

frase = "minombre es 'yohnny' y soy un crack"

document.write(frase)



//operadores (intermedio)//
//operadores logicos//
//operadores de comparacion//


//operadores logicos//

//se basan en los operadores de comparacion (true y false) para devolver una contracosa//

igualdad (a == b)

let numero =23;
let numero2 =13;

document.write(numero == numero2)

//cuando hacemos comparacion de igualdad nos dice false que quiere decir que no hay igualdad 

inigualdad (a != b)

let numero =23;
let numero2 =13;

document.write(numero != numero2)

//

identidad (a===b)
non-identity (a !== b)
mayor que (a > b)
mayor o igual que (a >= b)
menor que (a<b)
menor o igual que (a <= b)



//camael case//

//lo que hace es que todo lo escribamos al principio la primer palabra con minuscula y las demas palabras al principio con mayusculas//
//ejemplo//

decimeAlgoPorFavor

//asi es que trabaja javascript//

parseInt();


//condicionales//

//es una sentencia que nos permite validar algo, es ejecutar un bucle, un fragmento de codigo,un bloque//
//ejemplo de bloque//

{
	alert("hola");
	document.wite("yohnny")

}

//los condicionales sirven para que los bloques se ejecuten solo si una condicion se cumple.//
//ejemplo//

if (true) {
	alert("hola")
}

//es decir que si if(true)"verdadero", el bloque se ejecuta, pero si if(false) "falso"entonces el bloque no se ejecuta;entonces quiere decir que solo se ejecutara el bloque si el valor de if es (true)//
//ejemplo//

if(10 < 15) {
	alert("hola")
}

//en este caso se nos dice que si 10 es menor que 15, al ser cierto(true), se nos mostrara una ventana emergente diciendo hola//


nombre = "yohnny ospina";

if(nombre == "yohnny ospina") {
	alert("hola" + nombre)
}

//tambien se pueden agregar mas condicionales usando else if (tambien si)//
//ejemplo//

nombre = "yohnny ospina";

if(nombre == "yohnny ospina") {
	alert("hola" + nombre)
}

else if (nombre == "Ospina") {
	alert("tu Apellido Es Ospina")
}

//si por ejemplo tenemos dos variables y queremos que si alguna de las variables no cumplen las condiciones nos de un mensaje de alerta, se usa la condicion "else" que nos indica que si ninguna de las condiciones se cumplen entonces hacer la accion que se programa si no se cumplen las condiciones dadas.//
//ejemplo://

if(Nombre == "Yohnny Ospina" && Contraseña == "1033772576"){
	alert("Ok" + (" ") + Nombre);
}
else if(Nombre == "Tania Ospina" && Contraseña == "1033785630"){
	alert("OK" + (" ") + Nombre);
}

else{
	alert("ERROR. Los Datos No Coinciden.");
}



//Acividad De Historia De Cofla//

//historia de cofla 1//

dineroCofla = prompt("cuanto dinero tienes cofla?");
dineroRoberto = prompt("cuanto dinero tienes roberto?");
dineroPedro = prompt("cuanto dinero tienes pedro?");

dineroCofla = parseInt(dineroCofla)
if (dineroCofla >= 0.6 && dineroCofla < 1){
	alert("Cofla; comprate el helado de agua");
	alert("y te sobran" + (" ") + dineroCofla - 0.6);
}

else if (dineroCofla >= 1 && dineroCofla < 1.6){
	alert("Cofla; comprate el helado de crema");
	alert("y te sobran" + (" ") + dineroCofla - 1);
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
	alert("Cofla; comprate el helado de heladix");
	alert("y te sobran" + (" ") + dineroCofla - 1.6);
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
	alert("Cofla; comprate el helado de headovich");
	alert("y te sobran" + (" ") + dineroCofla - 1.7);
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
	alert("Cofla; comprate el helado de helardo");
	alert("y te sobran:" dineroCofla- 1.8);
}

else if (dineroCofla >= 2.9){
	alert("Cofla; helado de confites o el pote de 1/4kg.");
	alert("y te sobran" + (" ") + dineroCofla - 2.9);
}

else {
	alert("lo siento, no te alcanza para ningun helado")
}



if (dineroRoberto >= 0.6 && dineroRoberto < 1){
	alert("comprate el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
	alert("comprate el helado de crema");
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
	alert("comprate el helado de heladix");
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
	alert("comprate el helado de headovich");
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
	alert("comprate el helado de helardo");
}

else if (dineroRoberto >= 2.9){
	alert("helado de confites o el pote de 1/4kg.");
}

else {
	alert("lo siento, no te alcanza para ningun helado");
}



if (dineroPedro >= 0.6 && dineroCofla < 1){
	alert("comprate el helado de agua");
}

else if (dineroPedro >= 1 && dineroCofla < 1.6){
	alert("comprate el helado de crema");
}

else if (dineroPedro >= 1.6 && dineroCofla < 1.7){
	alert("comprate el helado de heladix");
}

else if (dineroPedro >= 1.7 && dineroCofla < 1.8){
	alert("comprate el helado de headovich");
}

else if (dineroPedro >= 1.8 && dineroCofla < 2.9){
	alert("comprate el helado de helardo");
}

else if (dineroPedro >= 2.9){
	alert("helado de confites o el pote de 1/4kg.");
}

else {
	alert("lo siento, no te alcanza para ningun helado");
}

// se usa "parseInt" para convertir cadenas de texto a numeros decimales//



//historia de Cofla 2//

// antes de seguir con la historia; quiero explicarles acerca de un "arrays" que significa matrices, se vienen a definir ahora como una especie de objetos (arreglo) hay podemos almacenar distintos tipos de datos.//

//digamos por ejemplo que tenemos una caja donde tienes distintos tipos de cosas; como por ejemplo una caja con mercado.
//esa caja es un arreglo;¿por que? porque esa caja de mercado esta con diferentes productos que estan organizados de una u otra forma.//
// en javascript, un arreaglo es un contenedor con distintos tipos de elementos dentro de el en forma de regla o sea, que estan ordenados de cierta manera.




//NOTA: En Este Punto Es Necesario Definir Que Tipo De Variable Es; poque RECORDEMOS Que Una Variable Se Puede Definir En 3 Las Cuales Son var let y const//

array

//PARA HACER UN ARRAY se usan corchetes [] para agrupar los elementos (datos)//
//ejemplo//
frutas = ["banana", "pera", "manzana"];

document.write(frutas)

// en la pantalla se nos mostrara escrito que elementos tiene el array frutas//

//para hacer que se muestre el primer elemento que se encuentra en el array, debemos indicarle la pocision en que esta se encuentra.//
//NOTA: las pocisiones se cuentan a partir de 0 en adelante.//
//ejemplo//

frutas = ["banana", "pera", "manzana"]

document.write(frutas[0])

//en la pantalla se mostrara escrito el primer elemento del array, en este caso banana//
// si por ejemplo colocamos una pocision que no tenemos, nos dira "Undefined" que significa que aun no esta definida//
//los datos estan asociados dentro de un indice.//
//NOTA: recordemos que array guarda todo tipo de datos, lo que significa que podemos ingresar cadenas de texto y numeros al tiempo, pero no en la misma pocision.//


arrays asociativos

//trabaja con el sistema de intercambio de informacion//
//es como un array que tiene un valor asociado//
//ejemplo//

let pc1 = {
	nombre "yohnnyPC",
	procesador: "Intel Inside",
	ram: "8GB",
	espacio: "300GB"
};




let pc2 =["yohnnyPC","Intel Inside","8GB" "300GB"];

document.write(pc2)


//Al escoger pc2; Nos muestra los *ELEMENTOS* que estan contenidos en pc2//

let pc1 = {
	nombre: "yohnnyPC",
	procesador: "Intel Inside",
	ram: "8GB",
	espacio: "300GB"
};




let pc2 =["yohnnyPC","Intel Inside","8GB", "300GB"];

document.write(pc1)


//Al escoger pc1;Nos muestra en la pantalla [object Object]; esto es debido a que la
// dentro tenemos unas variables las cuales tienen informacion, en este caso cadenas de texto.

let pc1 = {
	nombre: "yohnnyPC",
	procesador: "Intel Inside",
	ram: "8GB",
	espacio: "300GB"
};

let pc2 =["yohnnyPC","Intel Inside","8GB", "300GB"];



document.write(pc1["0"])

//NOTESE que aqui el document.write ha tenido ciertas modificaciones, esto debido a que como es un array Sociado;//
//TAMBIEN Cuando seleccionamos la  pocision 0, nos muestra en la pantalla "undefined", esto es debido a que nosotros// 
//ya le asignamos los nombres a esas pocisiones.//


let pc1 = {
	nombre: "yohnnyPC",
	procesador: "Intel Inside",
	ram: "8GB",
	espacio: "300GB"
};

let pc2 =["yohnnyPC","Intel Inside","8GB", "300GB"];



document.write(pc1["nombre"])

//AHORA nos muestra la informacion de los elementos que estan contenidos dentro del array pc1 con la pocision llamada *nombre*//
//en este caso "yohnnyPC"que seria la informacion contenida en esa pocision.//



let pc1 = {
	nombre: "yohnnyPC",
	procesador: "Intel Inside",
	ram: "8GB",
	espacio: "300GB"
};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `el nombre de mi PC es: ${nombre} <br>
		 el procesador es: ${procesador} <br>
		 la memoria ram es de: ${ram} <br>
		 el espacio es de: ${espacio} <br>`;


document.write(frase)

// nos muestra en pantalla los lo que dice la array frase//


Que es un bucle e iteracion

//los bucles tienen cierto parecido a la condicion if, la diferencia es que los bucles se repiten constantemente//

sentencia while
//el bucle while a diferencia de if es que if pregunta solo una vezo mejor dicho se ejecuta una sola vez si se cumple la scondiciones//
//pero while no, el pregunta infinitamente hasta que una condicion no se cumpla; es decir hasta que la condicion se vuelva falsa//
//ejemplo//

let numero = 0;

while (numero <6) {
	document.write(numero)
}
// como veremos en este ejemplo, en la pantalla se mostrara cargando infinitamente debido a que no le hemos dicho hasta cuando para//
// ejemplo//

let numero = 0;

while (numero < 6) {

	numero++;
	document.write(numero)

// en este caso, el bucle pregunta que si la variante numero es menor que seis; como es cierto (ya que es cero), entonces se le sume 1,//
//el bucle vuelve a preguntar que si la variante numero es menor que seis; sigue siendo cierto (ya que ahora su valor cambio a 1), y asi//
//sucesivamente hasta que el valor de la variante sea mayor a seis. y en la pantalla se nos muestra el procedimiento que se estuvo haciendo//

sentencia do while

//con do(hacer)lo que hacemos es que primero escribimos las fu ciones que se van a ejecutar y despues colocamos while//
//ejemplo//

let numero =0;

do {
	numero++;

	document.write(numero + "<br>")
}

while (numero<= 6)





sentencia break

//el break termina la sentencia//
//ejemplo//

let numero = 0

while(numero < 1000){
	numero ++;
	document.write(numero)
}
 
//esto se ejecutara hasta que la variante numero tenga un valor mayor a la sentencia(while)//
//si por ejemplo queremos que se detenga en un valor en especifico, por ejemplo en valor 10, lo que hacemos es lo siguiente://

let numero = 0

while(numero < 1000) {
	numero++;

	
	document.write(numero)
	if (numero == 10){
		break;
	}
}

// usamos if y le agregamos la sentencia de que cuando la variable numero se convierta o llegue a 10, break, es decir romper, terminar con el bucle infinito//



sentencia for
sentencia continue
sentencia for in
sentencia for of



sentencia for

//es igual que el while, la diferencia es que es un bucle determinado.//
// se compone de tres partes: 1. donde aplicamos la variable, 2. donde las inicializamos, 3.donde las iteramos.//
//NOTA: iterar es repetir cantidad x de veces//
//ejemplo//

for (let i = 0; i < 6; i++ ) {
	document.write(i + <br/>)
}

//dentro de for van a haber 3 cosas// 
//1.se crea la variable * for(let i) donde i es de increment//
//2.se crea la condicion.//
//3. iteracion: aumento - decremento//


// en pantalla se mostrara o,1,2,3,4,5,6. de forma vertical porque tenemos la etiqueta <br/>//
//lo que sucede es que primero le decimos que a la variable i, que se muestre y luego que se vaya sumando de a 1 hasta llegar a 6, pero no se muetra 6 debido a que al llegar a seis la condicion nos dice que debe ser un numero menor a 6 y por eso se detiene en ese punto.//

//otra forma de hacerlo es://

for (let i = 6; i > 6; i--) {
	document.write(i + <br/>)
}

//en este caso la forma en que se hizo fue de forma descendiente porque se le dijo a la variable que se mostrara, luego que a esa variable se le vaya restandode a 1 hasta que se valor sea menor e igual a 0.//
//NOTA la variable solo existe dentro de el bloque for.//


//hay otra forma de trabajar con la variable definiendola por fuera.//
//ejemplo//

let i;

for(i = 6; i >= 0; i--) {
	document.write(i + "</br>")
}

document.write(i)

//lo que hacemos es declarar la variable i, luego en for la ejecutamos, porque enn for la inicializamos, luego le damos la condicion y luego que vaya en decremento hata llegar a la condicion.//

//otra forma de hacer el bucle for://

let i = 6;
for (i; i >= 0; i--){
	document.write(i + "<br/>")
}

document.write(i)

//hace lo mismo que el bucle anterior, la diferencia es el como se escribio.//
//NOTA: tambien podemos usar la sentencia break en for//
// ejemplo//

for(let i = 0; i < 20; i++){
	document.write(i + "<br/>");
	if (i == 12) {
		break;
	}

}

// en este caso se detuvo en 12.//
// para por ejemplo que llegue a 12, pero que no se muestre el numero 12 en pantalla//

for(let i = 0; i < 20; i++){
	if (i == 12) {
		break;
	}
	document.write(i + "<br/>");
}

//lo unico que hacemos es cambiar de posicion el document.write y la ponemos despues de la condicion if//



sentencia continue

//ahora vamos a ver como hacemos para que en vez de llegar a doce, simplemente lo salte y siga contando//

for (let i = 0; i < 20; i++){
	if (i == 12) {
		continue;
	}
	document.write(i + "<br/>");
}

//vemos que hace el conteo hasta 20 sin mostrar 20 y se salto el 12//

sentencia for in y for of. 

//lo que hace es ahorrar esos tres pasos que tocaba hacer con for//
//ejemplo//


let animales = ["gato", "perro","raton"];

for (animal in animales){
	document.write(animal + "<br/>");
}

document.write("<br/>");

for (animal of animales){
	document.write(animal + "<br/>")
}

//(ambos recorren el array) lo que hace in es devolvernos la pocision de los elementos(0 1 2) o podriamos decir el indice//
//(ambos recorren el array) lo que hace of es darnos los nombres de los elementos contenidos en una variable//



sentencia label 




array1 = ["maria","josefa","roberta"];
array2 = ["pedro","marcelo",array1];

for (let array in array2){
	if (array == 2){
		for(let  array of array1){
			document.write(array + "<br/>");
		}
	}
	else{
			document.write(array2[array] + "<br/>");
		}
}

// lo que hizo fue recorrer primero el primer array, en caso de que este en la posicion 2, vamos a recorrer otro array,//

funciones


//hacer un saludo y dependiendo de lo que respondas te dira una u otra cosa//
//ejemplo//

respuesta = prompt("hola yohnny ospina, ¿como fue tu dia?");
if (respuesta == "bien" ) {
	alert("me alegro");
}
else {
alert ("una pena")
}

//para hacer que se repita x cantidad de tiempo se usa la siguiente funcion.//
funcionnes:

formas de crearlas (y llamarlas)

function saludar(){

} //a esta es la forma de crearla//

saludar() // esta es la forma de llamarla//

//ejemplo//

function 
//se usa para para darle una orden de ejecucion de bloque cuando escribamos el nombre de la funcion.//
//ejemplo//

function saludar(){

	respuesta = prompt("hola yohnny ospina, ¿como fue tu dia?");
if (respuesta == "bien" ) {
	alert("me alegro");
}
else {
alert ("una pena")
}

}

saludar()



que es el return

//es para que nos devuelva un valor.//
//lo que hace es finalizar la funcion.//
//RECORDAR que una funcion se compone de dos partes: una donde la declaramos, y otra donde las llamamos y tienen un objetivo//

function saludar(){
	alert("hola");
	return "la funcion se ejecuto correctamente"
}

let saludo = saludar ();

document.write(saludo)

parametros en una funcion

//son variables que se declaran y crean en una funcion//