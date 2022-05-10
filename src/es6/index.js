
//**********Funciones valores default ************/
//Forma antigua
function newFunction(name, age, country){
    var name = name || "Oscar";
    var age = age || "32";
    var country = country || "EC";
    console.log(name, age, country);
}

//ES6
function newFunctionS6(name = 'oscar', age='32',country='EC'){
    console.log(name, age, country);
}

newFunctionS6();
newFunctionS6("Diogo","35","US");

//**********Concatenar strings ************/
//forma antigua
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//ES6
//comilla francesa ` ALT+96
let epicPhraseS6 = `${hello} ${world}`
console.log(epicPhraseS6);


//--------------------------------------------------------------------------------------------

//**********Saltos de linea ************/
//forma antigua
let lorem = "lorem Qui consequatur. Comodi, Impsum vel duis yet minima \n"
+ "otra frase epica necesitada";

//ES6
let loremS6 = `lorem Qui consequatur. Comodi, Impsum vel duis yet minima 
otra frase epica necesitada
`;

console.log(lorem);
console.log(loremS6);

//**********Obtener propiedades de ibjetos ************/
// Objetos
let person = {
    'name' : 'diogo',
    'age' : '35',
    'country' : 'EC'
}

//forma antigua
console.log(person.name, person.age);

//forma ES6
let {name,age,country} = person;

console.log(name, age, country);


//**********Operador de propagacion ************/
let team1 = ['oscar', 'julian','ricardo'];
let team2 = ['valeria', 'jessica','camila'];

let education = ['david', ...team1, ...team2]; //forma ES6

console.log(education);


//**********Asignaciones variables ************/

var hola = "hola";
let holaL = "hola"; //solo esta disponible en el scope

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);
//console.log(globalLet); //**ERROR globalLet solo es accesible en el scope


//**********Constantes ************/

const a = "a";
//a = "b"; //**ERROR no se puede reasignar valores a un const

//--------------------------------------------------------------------------------------------

  

//********** a  ************/

