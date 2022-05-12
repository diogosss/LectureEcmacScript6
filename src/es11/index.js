
/***************IMPORT ******************/
const button = document.getElementById("btn");

button.addEventListener("click", async function() {
    const module = await import("./file.js");
    module.hello();
});


//*************BIG IN************** */

const aBigNumber = 9007199254740991n; 

const anotherBigNumber = BigInt(9007199254740991);


console.log(aBigNumber);
console.log(anotherBigNumber);


//*************Promise all setting************** */

const promise1 = new Promise((resolve, reject) => reject("reject"));

const promise2 = new Promise((resolve, reject) => resolve("resolve 1"));

const promise3 = new Promise((resolve, reject) => resolve("resolve 3"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


//*************Global dis************** */

//en el navegador

console.log(window);
console.log(self);
console.log(frames);
console.log(this);


console.log(globalThis);


//*************Elementos nulos************** */

const foo = null ?? 'defaul string';
console.log(foo);

const foos = asd ?? 'defaul string';
console.log(foos);

// es un operador lógico que devuelve su operando del lado 
//derecho cuando su operando del lado izquierdo es null o undefined, 
//de lo contrario devuelve su operando del lado izquierdo.
false ?? 'foo' // false
undefined ?? 'foo' // 'foo'
null ?? 'foo' // 'foo'
NaN ?? 'foo' // NaN


//*************optional chaining************** */

const user = {};

console.log(user?.profile?.email); //permite no detener no cerrar romper la aplicaicon

//sol: undefined

if(user?.profile?.email){
    console.log("email");
}else{
    console.log('fail');
}

