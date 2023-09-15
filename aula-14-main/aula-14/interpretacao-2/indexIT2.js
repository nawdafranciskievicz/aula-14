
// Leia o c�digo

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console?

/*
sera impresso [	nome: "Juca", 
				idade: 3, 
				raca: "SRD"

				nome: "Juba", 
				idade: 3, 
				raca: "SRD"

				nome: "Jubo", 
				idade: 3, 
				raca: "SRD"]

foi isso que foi impresso no consolE.														
*/
// b) O que faz a sintaxe dos tr�s pontos antes do nome de um objeto?
