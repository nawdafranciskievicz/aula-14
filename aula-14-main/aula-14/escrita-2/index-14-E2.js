
/**
 * 
 * Resolva os passos a seguir
 * 
 * a) Crie dois "objetos" diferentes com as seguintes propriedades: nome, idade e profiss�o. 
 * 
 * b) Escreva uma "fun��o" que receba um "objeto" de cada vez e retorne um "array" com as seguintes informa��es:
 * - O valor de "nome".
 * - O numero de caracteres do valor "nome".
 * - O valor de "idade".
 * - O valor de "profiss�o".
 * - O numero de caracteres do valor "profiss�o".
 * pessoaOriginal.apelidos[0]
**/

const pessoa = {
	nome: "Bruno", 
	idade: 23, 
	profissao: "Instrutor"
}

const pessoaNova = {
	nome: "Joao",
	idade: 25,
	profissao: "Ajudante de carregamento"
}

function minhaFuncao(param) {
	let resultado = [param.nome, param.nome.length, param.idade, param.profissao, param.profissao.length]
	return resultado
}


console.log(minhaFuncao(pessoa))
console.log(minhaFuncao(pessoaNova))

// Retorno: ["Bruno", 5, 23, "Instrutor", 9]
