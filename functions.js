
function add(numero_uno, numero_dos = 2) { // definicion kebab-case

    console.log(numero_uno, numero_dos)

    const resultado = (numero_uno + numero_dos + 1) * 2 // snake_case

    console.log(resultado)

    let objeto = {
        result: resultado
    }

    if(objeto.result == NaN || !objeto.result) {
        console.log('Epa ocurrio algo inesperado!')
        return undefined
    }

    return objeto
}

let miNumeroFavorito = 7  // camelCase

//let primeraSuma = add(miNumeroFavorito,2) + 10

console.log(add(25))

//  add(0,0)

//  console.log(primeraSuma, add(25))