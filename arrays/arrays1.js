const lista = ['Banana', 'Abacaxi', 'Manga', 'Morango', 'Uva']

// verifica se existe na lista um elemento com o mesmo nome
// console.log(lista.includes('Uva'));

// const elementoEncontrado = lista.find(function (elemento) {
//     return elemento === 'Abacaxi'
// })

// metodo map
// const novaLista = lista.map((elemento) => {
//     return `O nome da fruta é: ${elemento}`
// })

// console.log(novaLista);

// metodo filter
const filtroDeFrutas = lista.filter((elemento) => {
    return elemento.length <= 5
})

console.log(filtroDeFrutas);

