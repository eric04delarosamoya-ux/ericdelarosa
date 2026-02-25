//CIFRADO CESAR
const abece="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let frase="casa"
let paso=3

let nuevafrase=""
for (i=0;i<frase.length;i++) {
	let posicion=abece.indexOf (frase[i])
	let nuevaletra=abece[posicion+paso]
	let nuevafrase=nuevafrase+nuevaletra
}

console.log(frase + "es: "+nuevafrase)