
let expresion = (2 == '2') // true

let condicion = ('2' === 2) // false

let comparacion = 10 > 3 // true

console.log( { matricula: '18AB-15K'} == true )

if ( expresion && comparacion && condicion ) {

    console.log('Me cumpli y la expresion es verdadera', expresion, condicion)

} else if(condicion || expresion) {

    console.log(" Si la expresion es falsa y la condicion es verdadera 🎃")

} else {

    console.log("Si la condicion es falsa y la expresion es falsa")

}
