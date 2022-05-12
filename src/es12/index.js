
///*************// 🧯 Replace  ************** */


const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

//// Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

//// Output: Python es maravilloso, con Python puedo crear el futuro de la web.


///*************/// 🔒 Metodos privados  ************** */


class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
    
};

const message = new Message();
message.show('Hola!'); //no se puede imprimir es privado


///************* // //  👽 Promise Any  ************** */

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response)); //resp imprime el q se resuelva primero


///************* //  🦴 WeakRef(element);  ************** */

class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element) // refrencia debil evtar q sea recogid por el garbage collector
    }
    {...}
}

///************* // 🧪 Nuevos operadores lógicos  ************** */

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse); //

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse); //

let isTrue = true;
let isFalse = false;
console.log(isTrue ??= isFalse); //


/**
 *  funcionamiento de && = les dejo el siguiente link

En palabras simples lo que va a suceder es lo siquiente:

x && (x = y);

Eso significa que primera se realiza la comparacion logica entre x e y , 
de ser verdadera se asigna el valor de y en x, de ser falsa no sucede la asignacion.
 * 
 */