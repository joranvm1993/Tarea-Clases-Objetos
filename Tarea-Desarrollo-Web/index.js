// 1. Crear un objeto que tenga minimo dos metodos
// ademas debe tener una propiedad que sea un objeto

const alumno = {
    nombre: 'Andres',
    apellido: 'Vasquez',
    edad: 29,
    contacto:{
        direccion: 'calle 20',
        telefono: 321583,
        ciudad: 'Medellin',
        correo: 'joranvm93@gmail.com'
    },
    
    mostrarNombreAlumno: function(){
        return console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}`)
    },

    mostrarContacto: function(){
        return `Direccion: ${this.contacto.direccion}, Telefono: ${this.contacto.telefono}, Correo: ${this.contacto.correo}`
    }
}



console.log(alumno.mostrarContacto())
console.log(alumno.mostrarNombreAlumno())



// 2. Crear una clase que herede de otra.
//     Debe poseer minimo 3 propiedades para el constructor


class Vehiculo {
    constructor(modelo, marca, color, anio){
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
        this.anio = anio;
    }
}

class Moto extends Vehiculo{
    constructor(marca, modelo, color, anio, cilindraje){
        super(modelo, marca, color, anio)
        this.cilindraje = cilindraje;
    }

    mostrarMoto(){
        return `Datos de la moto: Marca:${this.marca}, Modelo:${this.modelo}, Color: ${this.color}, Año: ${this.anio}, Cilindraje: ${this.cilindraje}`
    }
};


let moto = new Moto('Bmw', 'Gs 1250 Adventure', 'Azul', 2022 ,1250);

console.log(moto.mostrarMoto());


// 3. Crear una funcion tipo flecha que haga uso de la clase construida y el 
// objeto declarado

const usoClase = () => {

    let Carro = new Vehiculo('Toyota', 'Prado', 'Blanco', 2020)

    return console.log(Carro)

}

usoClase();


const usoObjetoLiteral = (alumno)=>{

    const {nombre, apellido, edad} = alumno;

    return `Nombre alumno ${nombre}, Apellido: ${apellido}, Edad: ${edad}`
}


console.log(usoObjetoLiteral(alumno));