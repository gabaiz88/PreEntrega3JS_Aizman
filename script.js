/* //Inicializacion de presentacion de los ingredientes
const TAMANIO_HARINA = 1000;
const CANT_HUEVOS = 30;
const TAMANIO_LECHE = 1000;
const TAMANIO_MANTECA = 500;
const TAMANIO_AZUCAR = 1000;
const TAMANIO_MEMBRILLO = 500;
const TAMANIO_CHOCOLATE = 1000;
const cantOpciones = 4; 
let precio;

// generacion del Array Pastafrola
const ingredientesPastafrola = [
    {id: 1, nombre: "HUEVO", precio: 0, tamanio: CANT_HUEVOS},
    {id: 2, nombre: "HARINA", precio: 0, tamanio: TAMANIO_HARINA},
    {id: 3, nombre: "AZUCAR", precio: 0, tamanio: TAMANIO_AZUCAR},
    {id: 4, nombre: "MANTECA", precio: 0, tamanio: TAMANIO_MANTECA},
    {id: 5, nombre: "MEMBRILLO", precio: 0, tamanio: TAMANIO_MEMBRILLO},
];

//generacion de array Brownie
const ingredientesBrownie = [
    {id: 1, nombre: "HUEVO", precio: 0, tamanio: CANT_HUEVOS},
    {id: 2, nombre: "HARINA", precio: 0, tamanio: TAMANIO_HARINA},
    {id: 3, nombre: "AZUCAR", precio: 0, tamanio: TAMANIO_AZUCAR},
    {id: 4, nombre: "MANTECA", precio: 0, tamanio: TAMANIO_MANTECA},
    {id: 5, nombre: "CHOCOLATE", precio: 0, tamanio: TAMANIO_CHOCOLATE},
];

const tortas = [ingredientesPastafrola, ingredientesBrownie];

//Constructor de torta
class Torta {
    constructor(id, nombre, precio, tamanio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.tamanio = tamanio;  
    }
}

//elije la opcion de que torta quiere sacar el costo
elegirOpcion = () => {
    alert("\t\tSIMULADOR DE COSTO\t\t")
    opcion = parseInt(prompt("Elija la torta que desea realizar:\n 1- Pastafrola \n 2-Brownie \n 3-Sacar costo de un ingrediente \n 4-Salir "));
    console.log(opcion);
    while (opcion < 1 || opcion > cantOpciones || isNaN(opcion) == true) {
        alert("Opcion incorrecta.");
        opcion = parseInt(prompt("Elija la torta que desea realizar:\n 1- Pastafrola \n 2-Brownie \n 3-Sacar costo de un ingrediente \n 4-Salir "));
    }
    return opcion;
}

//Asigna el precio inicial de los ingredientes
asignarPrecioProducto = (array) => {
    alert("\t\tIngrese el precio para el ingrendiente en GRAMOS o MAPLE (en caso de huevos)\t\t")
    for (let i = 0; i < array.length; i++) {
        let ingrediente = array[i];
        let precioAsignado = prompt(`${ingrediente.nombre}: `);
        if (precioAsignado === ''){
            precioAsignado = 0;
        }
        ingrediente.precio = precioAsignado;
    }
}

//Lista los ingredientes de las tortas
listarProductos = (array) => {
    alert("Ingrediente de la torta: ");
    array.forEach(i => {
        alert(`${i.nombre}. Presentacion en gramos o unidades: ${i.tamanio}`);
    });
} 

//Agrega ingrediente si asi lo desea el usuario
agregarIngrediente = (array) => {
    let confirmarAgregar = false;
    do {
    confirmarAgregar = confirm("Desea agregar otro producto a la lista?");
        if (confirmarAgregar) {
            let idNuevo = array.length +1;
            let nombreProductoNuevo = prompt("Ingrese el nombre del producto a agregar: ").toUpperCase(); 
            let precioNuevo = 0;
            let tamanioNuevo = prompt("Ingrese el tamanio en el que viene: ");
            let torta = new Torta(idNuevo, nombreProductoNuevo, precioNuevo, tamanioNuevo);
            array.push(torta);
        }
    } while (confirmarAgregar);
}

//calcula el costo de la torta
calcularCosto = (array) => {
    let costo = 0;
    for (let i = 0; i < array.length; i++) {
       cantNecesaria = prompt(`Elija la cantidad que necesita en gramos o unidades del ingrediente ${array[i].nombre}`)
       console.log(cantNecesaria);
       costo += Math.floor((cantNecesaria / array[i].tamanio) * array[i].precio);
    }
    return costo;
}

//busca un ingrediente en la matriz tortas, ingrediente por torta
buscarIngrediente = (ingrediente) => {
    let tamanioIngrdiente = -1;
    for (let i = 0; i < tortas.length; i++) {
        for (let j = 0; j < tortas[i].length; j++) {
            if (tortas[i][j].nombre === ingrediente){
                console.log("lo encontro");
                tamanioIngrdiente = tortas[i][j].tamanio;
            }
        }
    }
    return tamanioIngrdiente;
}

//calcula el costo de un solo ingrediente
calcularCostoUnIngrediente = (tamanioIngrediente) => {
    let costo = 0;
    let precio = parseFloat(prompt("Ingrese el precio: "));
    let cantNecesaria = parseFloat(prompt("Cantidad necesaria?"));
    costo = Math.floor(parseFloat(cantNecesaria / tamanioIngrediente) * precio);
    return costo;
}

//calcula costo de ingrediente nuevo que no este precargado
calcularCostoUnIngredienteNuevo = (nombre) => {
    let precio = parseFloat(prompt("Ingrese el precio: "));
    let tamanio = parseInt(prompt("Ingrese el tamaño de la presentacion del producto en gramos o unidades: "))
    let cantNecesaria = parseFloat(prompt("Cantidad necesaria?"));
    costo = Math.floor(parseFloat(cantNecesaria / tamanio) * precio);
    alert(`El costo para el ingrediente ${nombre} es: ${costo}`)
    return costo;
}

//agrupador de tareas
tareas = (a) => {
    listarProductos(a);
    agregarIngrediente(a);
    asignarPrecioProducto(a);
}

//menu switch
menuPrincipal = () => {
    arrayIngredientes = tortas[opcion-1];
    switch (opcion) {
        case 1:
            tareas(arrayIngredientes);
            costo = calcularCosto(arrayIngredientes);
            alert(costo);
            break;
        case 2:
            tareas(arrayIngredientes);
            costo = calcularCosto(arrayIngredientes);
            alert(costo);
            break;
        case 3:
            ingrediente = prompt("Ingrese el ingrediente a sacar el costo: ").toLocaleUpperCase();
            tamanioIngrediente = buscarIngrediente(ingrediente);
            if (tamanioIngrediente != -1) {
            costo = calcularCostoUnIngrediente(tamanioIngrediente);
            alert(costo);
            } else {
                confirmAgregarNuevo = confirm(`"No se encontró ${ingrediente} entre los ingredientes precargados. Desea calcularlo?`)
                if (confirmAgregarNuevo) {
                    calcularCostoUnIngredienteNuevo(ingrediente);
                }
            }
            break;
        case 4: 
            alert("Programa finalizado!");
            break;
    }
}

//main
do {
opcionElegida = elegirOpcion();
menuPrincipal();
} while (opcionElegida != cantOpciones); */


// let contenedor = document.getElementById("contenedor");

// let boton = document.getElementById("agregar_ingrediente");
// const agregarLineaModal = () => {
//     let lineaModal = document.createElement("div");
//     lineaModal.innerHTML = `
//     <h2>jdiaojdsioasjdo</h2>
//     `;

//     contenedor.append(lineaModal);
// };

// boton.addEventListener("click", () => agregarLineaModal());

// let boton = document.getElementById("boton");
// const ejecutar = (nombre) => {
//   console.log("nombre ", nombre);
// };

// boton.addEventListener("click", () => ejecutar("andres"));
const TAMANIO_HARINA = 1000;
const CANT_HUEVOS = 30;
const TAMANIO_LECHE = 1000;
const TAMANIO_MANTECA = 500;
const TAMANIO_AZUCAR = 1000;
const TAMANIO_MEMBRILLO = 500;
const TAMANIO_CHOCOLATE = 1000;
const cantOpciones = 4; 
let precio;

const ingredientesPastafrola = [
    {id: 1, nombre: "HUEVO", precio: 0, tamanio: CANT_HUEVOS},
    {id: 2, nombre: "HARINA", precio: 0, tamanio: TAMANIO_HARINA},
    {id: 3, nombre: "AZUCAR", precio: 0, tamanio: TAMANIO_AZUCAR},
    {id: 4, nombre: "MANTECA", precio: 0, tamanio: TAMANIO_MANTECA},
    {id: 5, nombre: "MEMBRILLO", precio: 0, tamanio: TAMANIO_MEMBRILLO},
];

let contenedorIngrediente = document.getElementById("contenedorIngrediente");
let contenedorTamanio = document.getElementById("contenedorTamanio");
let contenedorPrecio = document.getElementById("contenedorPrecio");
let boton = document.getElementById("agregar_ingrediente");

const agregarLineaModal = () => {
    tabla = document.getElementById("tablaIngredientes");
    nombreIngredienteNuevo = prompt("Ingrese el nombre del ingrediente: ");
    tamanioIngredienteNuevo = prompt("Ingrese tamanio");
    precioIngredienteNuevo = prompt("Ingrese precio");
    tabla.insertRow(-1).innerHTML = `<td>${nombreIngredienteNuevo}</td>
    <td>${tamanioIngredienteNuevo}</td>
    <td>${precioIngredienteNuevo}</td>`
};
boton.addEventListener("click", () => agregarLineaModal());
