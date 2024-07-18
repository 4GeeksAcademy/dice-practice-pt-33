
// Que es un objeto iterable ?

let alfredo = {
    edad: 29,
    peso: '70kg',
    colorDeOjos: 'verde',
    altura: '1.70m'
}

let listaDeAtributosDeAlfredo = Object.keys(alfredo)

for(let posicion in listaDeAtributosDeAlfredo){
    console.log(posicion , listaDeAtributosDeAlfredo[ (listaDeAtributosDeAlfredo.length - 1) - posicion])
}

for(let atributo in alfredo){
    console.log( atributo , alfredo[atributo] )
}



