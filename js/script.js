class Person {
    constructor (nombre, apellido, edad, genero, intereses, eat, sleep) {
        this._nombre = {nombre, apellido}; 
        this._edad = edad; 
        this._genero = genero; 
        this._intereses = intereses; 
        this._eat = eat; 
        this._sleep = sleep; 
    } 
    eating () {
        console.log (`${this._nombre.nombre}, ${this._eat} comiendo`); 
    }
} 

class Teacher extends Person { 
    constructor (nombre, apellido, edad, genero, intereses, eat, sleep, catedra, curso){ 
        super (nombre, apellido, edad, genero, intereses, eat, sleep);
        this._catedra = catedra; 
        this._curso = curso; 
    } 
} 
class Student extends Teacher { 
    constructor (nombre, apellido, edad, genero, intereses, eat, sleep, catedra, curso, tareas, examenes) { 
        super (nombre, apellido, edad, genero, intereses, eat, sleep, catedra, curso); 
        this._tareas = tareas;
        this._examenes = examenes;
    } 
    get tareas () { 
        return this._tareas; 
    } 
    set tareas (tareas) { 
        this._tareas = tareas; 
    } 
    get examenes () { 
        return this._examenes; 
    }
    set examenes (examen) { 
        this._examenes = examen; 
    }
    
} 

let unaPersonaX = new Person ("Norberto", "Castillo", 49, "masculino", ["rugby", "Futbol", "politicas"], "no está"); 
console.log (unaPersonaX); 
console.log (unaPersonaX._nombre);

let primerProfesor = new Teacher ("Ernesto", "Claypole", 30, "masculino", ["futbol", "exploracion", "tecnologias"], "FullStack", 5); 
console.log (primerProfesor); 

let primerEstudiante = new Student (); 
primerEstudiante.tareas = "hay Una Nueva tarea"; 
console.log (primerEstudiante.tareas); 

unaPersonaX.eating();


// Ejercicio 02 Dada la siguiente coleccion...
console.log ("Ingresamos al ejercicio 02: Arreglos")
const items = [
  { description: 'Tomates', quantity: 1, price: 3, total: 55 },
  { description: 'Cebolla', quantity: 3, price: 5, total: 5.5 },
  { description: 'Zanahoria', quantity: 2, price: 6, total: 17 },
  { description: 'Zapallo', quantity: 2, price: 9, total: 17 }
]; 

let cantidadTotal = items.map (filtrarItems);
console.log (`el arreglo de cantidad total es: ${cantidadTotal}`);

function filtrarItems(x) {
    let y = x.quantity;
    return y;
} 
let elTotaldeItems = cantidadTotal.reduce((sum, ele) => sum + ele);
console.log (`el total de items es: ${elTotaldeItems}`);