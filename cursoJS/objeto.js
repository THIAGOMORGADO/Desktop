// // Criando Objetos

// let personagem = {
//   nome: "Personagem 1",
//   idade: 25,

//   habilidades: {
//     ataque: "Espada",
//     defesa: "Escudo",
//     movimento: "Velocidade"
//   },
//   skill: {
//     build: 'Força',
//     level: 10,
//     exp: 1000
//   },
//   missao: [
//     {
//       nome: 'Missao 1',
//       objetivo: 'Enfrentar um inimigo',
//       status: 'Em andamento'
//     },
//     {
//       nome: 'Missao 2',
//       objetivo: 'Capturar um tesouro',
//       status: 'Concluída'
//     }
//   ]
// }

// // Aqui estamos percorrendo o objeto e array do personagem
// // Acessar o objeto e com o .
// // Acessar o Array e o [indice]

// console.log(personagem.nome)
// console.log(personagem.habilidades.ataque)
// console.log(personagem.skill.build)
// console.log(personagem.missao[1])


// Acessar e alterar o objeto

let personagem = {
  nome: "Personagem 1",
  idade: 25,

  habilidades: {
    ataque: "Espada",
    defesa: "Escudo",
    movimento: "Velocidade"
  },
  skill: {
    build: 'Força',
    level: 10,
    exp: 1000
  },
  missao: [
    {
      nome: 'Missao 1',
      objetivo: 'Enfrentar um inimigo',
      status: 'Em andamento'
    },
    {
      nome: 'Missao 2',
      objetivo: 'Capturar um tesouro',
      status: 'Concluída'
    }
  ]
}

// Aqui Estamos alterando as propriedade do objeto e o array
personagem.nome = "Thiago Morgado"
personagem.skill.build = "Mago"
personagem.skill.exp += 20
personagem.missao.push(
  {
    nome: 'Missao 3',
    objetivo: 'Conseguir uma loja',
    status: 'Em andamento'
  }
)

// Aqui estamos removendo elementos do array

// personagem.missao.pop()
// personagem.missao.shift()

console.log(personagem)
console.log(`Meu Build e ${personagem.skill.build}`)
console.log(`Parabens voce subio o exp ${personagem.skill.exp}`)
console.log(personagem.missao)
