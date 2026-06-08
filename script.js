console.log("Hola mundo");

const nombre= "Juan Daniel";
let apellido = "Reyes";

console.log(nombre);
console.log(apellido);

//nombre= "David";
apellido ="Cruz";
console.log(apellido);


// objetos de js

const persona ={
    nombre: "Juan",
    apellido: "Reyes",
    edad :20,
    apodos : ["pepe",
        "dani"
    ]
};

//console.log(persona.nombre);

persona.apellido ="Juan Cruz";
console.log("persona.apellido");

console.log("===========================Fin de objetos========");

//Funciones en javascript

/*function saludar (nombre) {
    return "Hola "  + nombre;

} */


const saludar=nombre => 
     "Hola "  + nombre


// saludar("Jose");    //== "Hola Jose"



const saludo= saludar (persona.apellido);
console.log(saludo)
console.log("===========================Fin de Funciones========");
console.log("===========================Listas========");

const listanumeros =[
 5, 10, 3, 20
];

console.log(listanumeros);

listanumeros [3] = 7;
console.log(listanumeros);

const numerosmultiplicados = listanumeros.map (
    (numerovoy) => {
        return numerovoy *3;
    }
);
console.log(numerosmultiplicados);

const numerosEnObjetos =  listanumeros.map (
    (numerovoy) => {
        return {
            valor: numerovoy
    };
}
);

console.log(numerosEnObjetos);



// Funcion Filter

const numerosx= [90, 70, 30, 10, 50];
const numertosfiltrados =numerosx.filter(
  (numerosx) => {
    return numerosx > 50;
  }  
);

console.log(numertosfiltrados);


const personas = [
   {
    nombre: "Jose",
    edad: 20
    },
   {
    
 nombre: "Juan",
    edad: 45
   },
    {

nombre: "Daniel",
    edad: 17

},

];

const personasmayores = personas.filter (
   
  (personapla) => {

      return personapla.edad > 17;
  }
);
console.log(personasmayores);

// funcion reduce

const numerosy = [3,6,9,12,16];
const sumanumeros = numerosy.reduce (

    (variablePersistente, elemento) => {
     variablePersistente = variablePersistente + elemento;
     return variablePersistente;
    },
    0
);

console.log(sumanumeros);


