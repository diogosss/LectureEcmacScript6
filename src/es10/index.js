
//--------------method flat---------------/
//devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array)
console.log(array.flat(2))

//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2]));
/*[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
] */

//----------------trim---------------------------/
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

let hello2 = 'hello world                  ';
console.log(hello2);
console.log(hello2.trimEnd()); // final

//-------------optional catch biding-------------/

try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

//-------------fromEntries----------------------/
// array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);