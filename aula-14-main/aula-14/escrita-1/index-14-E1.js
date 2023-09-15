
/**
 * 
 * Resolva os passos a seguir
 * 
 * a) Crie um objeto. Ele deve conter duas propriedades: nome (string)
 *  e apelidos (um array que sempre ter� exatamente tr�s apelidos).
 *  Depois, escreva uma fun��o que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
 * 
 * // Exemplo de entrada
 * const pessoa = {
 *    nome: "Vitor Hugo", 
 *    apelidos: [ "Vitinho", "Vit�o", "Vit" ]
 * }
 * 
 * // Exemplo de sa�da
 * // "Eu sou Vitor, mas pode me chamar de: Vitinho, Vit�o ou Vit"
 * 
 * Dica: n�o se esque�a de chamar a fun��o passando o objeto que voc�
 *  criou como argumento, sen�o seu c�digo n�o ser� executado!
 * 
 * Agora, usando o operador "spread", crie um novo objeto mantendo o valor
 *  da propriedade nome, mas com uma nova lista de tr�s apelidos. Depois, chame
 *  a fun��o feita no item anterior passando como argumento o novo objeto.
 * 
**/


/**
 * 
 * Resolva os passos a seguir
 * 
 * a) Crie um objeto. Ele deve conter duas propriedades: nome (string)
 *  e apelidos (um array que sempre ter� exatamente tr�s apelidos).
 *  Depois, escreva uma fun��o que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
 * 
 * // Exemplo de entrada
 * const pessoa = {
 *    nome: "Vitor Hugo", 
 *    apelidos: [ "Vitinho", "Vit�o", "Vit" ]
 * }
 * 
 * // Exemplo de sa�da
 * // "Eu sou Vitor, mas pode me chamar de: Vitinho, Vit�o ou Vit"
 * 
 * Dica: n�o se esque�a de chamar a fun��o passando o objeto que voc�
 *  criou como argumento, sen�o seu c�digo n�o ser� executado!
 * 
 * Agora, usando o operador "spread", crie um novo objeto mantendo o valor
 *  da propriedade nome, mas com uma nova lista de tr�s apelidos. Depois, chame
 *  a fun��o feita no item anterior passando como argumento o novo objeto.
 * 
**/

const pessoa = {
    nome: 'kaua',
    apelidos: ['kauazin','kaka','KK']
}

const pessoaNova = {
    ...pessoa,
    apelidos: ['gzi','joao','moises']
}

function objeto(pessoaOriginal) {
    console.log('Eu sou', pessoaOriginal.nome, 'mas pode me chamar de:', pessoaOriginal.apelidos[0], pessoaOriginal.apelidos[1], pessoaOriginal.apelidos[2])
}

objeto(pessoa)
objeto(pessoaNova)