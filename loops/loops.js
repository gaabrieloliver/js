// loops
const listaDePessoas = ['Gabriel','João','Maria']

// for tradicional
console.log('Utilizando o for tradicional abaixo:');

for (let index = 0; index < listaDePessoas.length; index++) {
    // executa algo para cada elemento percorrido na lista
    console.log(`Meu nome é: ${listaDePessoas[index]}`);   
}

// for of
console.log('Utilizando o for of abaixo:');

for (const pessoa of listaDePessoas) {
    console.log(`Meu nome é: ${pessoa}`);
}