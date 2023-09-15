
// Leia o c�digo

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [ "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish" ], 
	transmissoesHoje: [
		{ canal: "Telecine", horario: "21h" }, 
		{ canal: "Canal Brasil", horario: "19h" }, 
		{ canal: "Globo", horario: "14h" }
	]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// O que vai ser impresso no console?

/*
será impresso [matheus nachtergaele] no primeiro console.log já no segundo console.log
será impresso [virginia cavendish (e a quantidade de letras que tem neste nome) ] e no terceiro console.log
será impresso [canal: Globo, Horario: 14h]
*/