
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


//forma antigua
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//ES6
//comilla francesa ` ALT+96
let epicPhraseS6 = `${hello} ${world}`
console.log(epicPhraseS6);