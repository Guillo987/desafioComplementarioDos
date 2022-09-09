//CLASS CONSTRUCTOR
class Paciente {
    constructor(nombre, apellido, edad, telefono, medio, metodoPago) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.edad = edad,
            this.telefono = telefono,
            this.medio = medio,
            this.metodoPago = metodoPago
    }
};

//OBJETOS INSTANCIADOS MEDIANTE CLASS CONSTRUCTOR
const Paciente1 = new Paciente('Max', 'Power', 38, 1557093685, 'video', 'MP');
const Paciente2 = new Paciente('Lalo', 'Landa', 10, 1556029999, 'llamada', 'TRANSF');
const Paciente3 = new Paciente('Armando', 'Barreda', 45, 1556029999, 'llamada', 'TRANSF');

//OBJETOS LITERALES
const Paciente4 = {
    nombre: "Juan Carlos",
    apellido: "Amendolara",
    edad: 72,
    medio: 'carta',
    metodoPago: 'CASH'
}

const Paciente5 = {
    nombre: "Ernesto",
    apellido: "Sábato",
    edad: 'N/A',
    medio: 'medium',
    metodoPago: 'CASH'
}
//PUSH DE LOS OBJETOS INSTANCIADOS A UN NUEVO ARRAY
const listaPacientes = [];

listaPacientes.push(Paciente1, Paciente2, Paciente3);
console.log(listaPacientes);
console.log(listaPacientes.length);

//PUSH DE LOS OBJETOS LITERALES AL MISMO ARRAY
listaPacientes.push(Paciente4, Paciente5)
console.log(listaPacientes);
console.log(listaPacientes.length);

//AGREGAR DATOS INGRESADOS POR EL USUARIO Y PUSHEARLOS AL ARRAY
let dato1 = prompt('Ingrese un dato');
let dato2 = prompt('ahora otro dato más');

listaPacientes.push(dato1, dato2);
console.log(listaPacientes);