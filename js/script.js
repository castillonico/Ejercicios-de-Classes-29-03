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
  { _description: 'Tomates', _quantity: 1, _price: 3, _total: 55 }, 
  { _description: 'Cebolla', _quantity: 3, _price: 5, _total: 5.5 }, 
  { _description: 'Zanahoria', _quantity: 2, _price: 6, _total: 17 }, 
  { _description: 'Zapallo', _quantity: 2, _price: 9, _total: 17 } 
]; 

// 1. Mostrar total de items 
items.forEach (x=> console.log ("Listando Items... ", x)); 
//2. Mostrar precio sumado de todos los ítems 
let filtroTotales = items.map (x => x._total); 
console.log (`El arreglo con todos los totales es: ${filtroTotales}`); 
const sumatoriaTotales = filtroTotales.reduce ((acc, ele) => acc + ele, 0); 
console.log ("El precio sumado de todos los items es: ", sumatoriaTotales); 

// 3. Mostrar sólo los ítems que contengan la property quantity igual a 2 
porCantidad (items, 2); 

// 4. Mostrar un ítem con quantity igual a 3 
porCantidad (items, 3); 

function porCantidad(arr, criterio) { 
    let nuevo = arr.filter (x => x._quantity === criterio); 
    nuevo.forEach (x => console.log("Los items con la cantidad: ", criterio, " son: ", x._description)); 
} 

// SLIDE 05 

console.log ("Ingresamos al Slide 05 "); 

const persons = [ 
    { name: 'Maria', age: 59 }, 
    { name: 'Juan', age: 29 }, 
    { name: 'Pedro', age: 29 }, 
    { name: 'Pedro', age: 59 }, 
    { name: 'Pedro', age: 29 } 
]; 

// 1. Agrupar personas por edad, de manera que el resultado muestre { 29: 3, 59: 2 }
const personas29 = persons.filter ( x => x.age === 29); 
console.log ("la cantidad de personas con 29 años es: ", personas29.length); 
const personas59 = persons.filter (x => x.age === 59); 
console.log ("la cantidad de personas con 59 años es de: ", personas59.length); 
console.log ("el arreglo de personas de 59 es: ", personas59); 

// 2. Mostrar la primer persona de 29 años
const primero29 = persons.find (x => x.age === 29); 
console.log ("la primer persona con 29 años es: ", primero29.name); 

// 3. Mostrar solo las personas con edad 59
console.log ("las personas con 59 son: "); 
nombres59(personas59);
function nombres59(arr) {
    arr.forEach (element => { 
        const nombre = element.name; 
        console.log(nombre); 
    });
} 

// SLIDE 06 
console.log ("ingresamos al slide 06 "); 

class Item { 
    constructor (description, quantity, price, total) { 
        this._description = description, 
        this._quantity = quantity, 
        this._price = price, 
        this._total = total
    } 
    // geter: 
    cargarDescripcion (descr) { 
        this._description = descr; 
    } 
} 

let nuevoItem = new Item ("naranjas", 50, 20, 9.5); 
items.push (nuevoItem); 
items.forEach (x=> console.log ("Listando Items... ", x._description)); 