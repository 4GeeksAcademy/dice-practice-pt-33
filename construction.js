

// OOP - Object Oriented Programming -> Java -> Class 

// Prototype Oriented Programming

// Functional Programming

function Perro(nombre, raza){ // La generalizacion

    this.nombre = nombre;

    this.raza = raza;

    this.ladrar = function(){ // Method
        console.log( this.nombre +" emite sonido: Guauuu guauuuu guu ")
    }
}

let oddy = new Perro('Oddy', 'Poodle') // Instancia de un Perro

let harry = new Perro('Harry', 'Mestizo') 

console.log(this, globalThis)

harry.ladrar()
oddy.ladrar()