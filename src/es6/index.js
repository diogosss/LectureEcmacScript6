
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

  

//********** Objeots Mejorada  ************/

let name_ = "diogo";
let age_ = 32;

obj_ = {name: name_, age: age_}; //forma antigua

obj_S6 = {name_, age_}; //forma nueva S6

console.log(obj_);

console.log(obj_S6);


//********** ARROWS Functions  ************/

const names = [
    {name: "diogo", age: "32"},
    {name: "jessica", age: "27"}
]

//iterar antiguo
let listOfnames = names.map(
    function (item){
        console.log(item.name);
    }
);


//forma 1 S6 
let listOfnames1 = names.map(item => console.log(item.name));

//forma 2 S6 
let listOfnames2 = (name, age, country ) => {
    //code function
}

//forma 3 S6 
let listOfnames3 = name => {
    //code function
}

//forma 4 S6 
const square = num => num * num;

console.log(square(2));


//********** PROMESAS para Asynchronismo  ************/

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Hey! OK!!");
        }else{
            reject("Ups!! ERROR!!");
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("hola"))
    .catch(error => console.log(error));



//--------------------------------------------------------------------------------------------


//********** Clases, Módulos y Generadores  ************/

class calculator {
    constructor(){
        this.valorA = 0;
        this.valorB = 0;
    }

    sum(valorA, valorB){
        this.valorA = valorA;
        this.valorB = valorB;
        return this.valorA + this.valorB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));


//********** Import Export modules ************/

//import { hello } from './module.js'; //forma nueva NO FUNCA AQUI

const hello = require('./module.js')

hello(); //forma nueva

console.log(hello()); 


//********** GENERATORS ************/

function* helloWorld() {
    if(true){
        yield 'Hello, ';
    }
    if (true){
        yield 'World!!'
    }
};

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//********** FIBONACCI CON GENERATORS ************/

function* fibonacci(){
    var fn1 = 1;
    var fn2 = 1;
    while (true){  
      var actual = fn2;
      fn2 = fn1;
      fn1 = fn1 + actual;
      var reset = yield actual;
      if (reset){
          fn1 = 1;
          fn2 = 1;
      }
    }
  }
  
  var secuencia = fibonacci();
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  console.log(secuencia.next().value);     // 5
  console.log(secuencia.next().value);     // 8
  console.log(secuencia.next().value);     // 13
  console.log(secuencia.next(true).value); // 1 //reset
  console.log(secuencia.next().value);     // 1
  console.log(secuencia.next().value);     // 2
  console.log(secuencia.next().value);     // 3
  console.log(secuencia.next().value); 
  console.log(secuencia.next().value); 
  console.log(secuencia.next().value); 
  console.log(secuencia.next().value); 
  console.log(secuencia.next().value); 