//una variable es un espacio que se guarda en memoria en donde se guarda o contiene informacion y se puede cambiar el valor dentro de la variable.//
//ejemplo recipiente = "papel"
// si por ejemplo quiero saber que hay dentro de una variable, puedousar como ejemplo un alert("")
// alert sirve para mostrar una ventana emergente donde me va a mosrtar la info que se almaceno en la variable//
//ejemplo alert("recipiente")// el me muestra el valor que tiene la variable recipiente lo cual seria papel como valor o informacion.
// hay varios tipos de string( (cadena de texto), Number, Boolean, (symbol "tipo de dato")(IMG)
// string = "cadena de texto"
// number = 19 (no se usa comillas ya que si las usamos, la informacion se vuelve cadena de texto)
// boolean = true/false (0,1)
// CASOS ESPECIALES DE DATOS: Undefine,  NULL, Nan. estas no hablan de que no esta definida o que hay un erro en la variable declarada.//
	//ejemplo: una  variable se puede clasificar en tres que son: var,let, const. ("var:la variable tiene alcance total del bloque donde la ejecutamos. let: limita el alcance e la variable a el bloque de donde la ejecutamos. const: es una constante y la variables constantes no pueden cambiar su valor que se le ha asignado".) A este proceso se le llama Scope que es el tipo de alcance que tiene cada una de ellas.
	// const nombre= "yohnny"
	// nombre = alexander 
	//alert (nombre)
	// en este caso la constante nombre tiene valor de yohnny y el alert tiene consignada la constante que se va a mostrar en pantalla; si le ordenamos que la constante nombre cambie de valor a alexander, veremos que su valor sigue siendo yohnny y que nos da un error dentro de la consola//

	//declarar una constante : es poner que tipo de constante es, ejemplo constante nombre; entonces a esa constante se le pone detras de ella var, let o const. y quedaria entonces asi: var nombre//
//para crear multiples variables se pueden hacer de varias manerascomo por ejemplo
	//
	//let numero, numero 2, numero 3;
	//
	//numero = 2;
	//numero 2 = 4;
	//numero 3 = 8;

	//let  numero = 2, numero 2 = 4, numero 3 = 8;

	//let numero = 2;    -_
	//let numero 2 = 4;    -_ es la opcion recomendada para tener un mejor orden.
	//let numero # = 8;   _-

//si tenmos un alert fijadas con las variables, apareceran ventanas emergentes mostrando el valor de las variables.

// el Null y Nan 
// Null (es para decir que la variable la declaramos como vacia)
// NaN (es un error cuando intentamos hacer una operacion con algo que no es numero. )

// una de la acciones que podemos hacer son:
	// una ventana de alerta (alert(""))
	// un recuadro de respuesta (promt(""))
		//para que guarde la respuesta que se da en el recuadro, podemos hacer que la respuesta se guarde en una variable.

Nombre =  "Yohnny";		

frase = `Soy ${Nombre} y Estoy Caminando`;

document.write(frase);

alert ("hola" + (" ") + Nombre)