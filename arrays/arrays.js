const lista = ['Banana', 'Abacaxi', 'Manga', 'Morango']

function pesquisarFruta(fruta) {
    var temFruta = lista.includes(fruta)
    if (temFruta === true) {
        console.log(`Tem ${fruta}`);
    } else {
        console.log(`Não tem ${fruta} na lista`);
    }
}

pesquisarFruta('Morango')