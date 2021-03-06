// Vamos voltar a Mark e John comparando seus IMCs!
// Desta vez, vamos usar objetos para implemente os cálculos!
// Lembre-se: IMC = massa / altura ** 2 = massa / (altura * altura)
// (massa em kg e altura em metros)

// Suas tarefas:
// 1. Para cada um deles, crie um objeto com propriedades para seu nome completo,
// massa e altura (Mark Miller e John Smith)
// 2. Crie um método 'calcBMI' em cada objeto para calcular o IMC (o mesmo
// método em ambos os objetos). Armazene o valor do IMC em uma propriedade
// e também o devolva do método.
// 3. Faça login no console de quem tem o IMC mais alto, junto com o nome completo e o
// respectivo IMC. Exemplo: "O IMC de João (28,3) é maior do que o de Marcos (23,9)!"

// Dados de teste: Marks pesa 78 kg e tem 1,69 m de altura. John pesa 92 kg e tem 1,95 m
// alta.

const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  massa: 78,
  altura: 1.69,
  calcIMC: function () {
    this.imc = this.massa / this.altura ** 2
    return this.imc
  }
}

const john = {
  firstName: 'John',
  lastName: 'Smith',
  massa: 92,
  altura: 1.95,
  calcIMC: function () {
    this.imc = this.massa / this.altura ** 2
    return this.imc
  }
}

mark.calcIMC()
john.calcIMC()
console.log(mark.imc)
console.log(john.imc)

//console

if (mark.imc > john.imc) {
  console.log(
    `O IMC de ${mark.firstName} (${mark.imc}) é maior do que o de ${john.firstName} (${john.imc})!`
  )
} else if (john.imc > mark.imc) {
  console.log(
    `O IMC de ${john.firstName} (${john.imc}) é maior do que o de ${mark.firstName} (${mark.imc})!`
  )
}
