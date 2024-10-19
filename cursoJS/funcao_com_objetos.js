let pessoa = {
  name: 'thiago',
  sobreNome: 'Morgado',
  idade: 30,
  nomeCompleto: function () {
    return `${this.name} ${this.sobreNome}`
  }
}

pessoa.name = 'Fernando'
pessoa.sobreNome = 'morgado'

console.log(pessoa.nomeCompleto()); // Output: thiago Morgado