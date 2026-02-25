//CIFRADO CESAR
const abece="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let frase="casa"
let paso=3
for (i=0;i<frase.length;i++) {
	console.log("Voy a buscar la letra: " + frase[i])
	let posicion=abece.indexOf (frase[i])
	console.log("Esta en la posicion: " + posicion)
	let nuevaposicion=posicion+paso
	let nuevaletra=abece[nuevaposicion]
	console.log("Su nueva letra es: "+nuevaletra)
}