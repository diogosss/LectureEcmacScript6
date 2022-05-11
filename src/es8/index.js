

//********** devolver clave y valores matriz ************/

const data = {
    frontend: "Oscar",
    backend:  "Isabel",
    design: "Ana",
}

const entries = Object.entries(data);

console.log(entries);

console.log(entries.length);


//********** object values************/

const values = Object.values(data);

console.log(values);

console.log(values.length);


//********** padding ************/ asignacion de elementos

const string = "hello";
console.log(string.padStart(7," hi")); // 7

console.log(string.padEnd(12," ------hi"));

console.log('food'.padEnd(12," ------"));


//********** Trailing comas ************/
//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const dataw= {
    front:'Alej', // Puede existir
    back: 'Rel'
}

