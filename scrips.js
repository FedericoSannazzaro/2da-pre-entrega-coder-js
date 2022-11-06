alert('Bienvenido a la tienda de ropa Online');

// Harcodeo de Indumentaria

class Indumentaria {
    constructor(descripcion, color, talle, unidad, precio, id) {
        this.descripcion = descripcion;
        this.color = color;
        this.talle = talle;
        this.unidad = parseInt(unidad);
        this.precio = parseFloat(precio);
        this.id = id;
    }
    asignarId(array) {
        this.id = array.length;

    }

}

let indumentarias = [
    new Indumentaria('Pantalon', 'azul', '46', 10, 5000, 1),
    new Indumentaria('Remera', 'azul', 'S', 10, 2500, 4),
    new Indumentaria('Camisa', 'azul', '40', 5, 3000, 10),
    
]

//Crear el string con los resultados//

function crearStringResultado(array) {
    let info = '';

    array.forEach(elemento => {
        info += 'Descripcion: ' + elemento.descripcion + '\nColor: ' + elemento.color + '\nTalle: ' + elemento.talle + '\nUnidades: ' + elemento.unidad + ' \nPrecio: $ ' + elemento.precio + '\n'
    });

    return info;

}
//Fin de crear el string con los resultados//

// Consulta para entrar como Usuario o Administrador

let tipoUser = prompt('Indica si eres Usuario o Administrador')

    // La logica de programacion para USUARIO

if (tipoUser.toUpperCase() == 'USUARIO') {

    // Carrito vacio para luego pushear, producto, cantidad y precio
    let carrito = [];

    let selection = prompt('Estas entrando como usuario, ¿Deseas comprar? Indique SI o NO');

    while (selection.toUpperCase() != 'SI' && selection.toUpperCase() != 'NO')
        //alert('Por favor ingresa SI o NO')
        selection = prompt('Indique SI o NO');

    if (selection.toUpperCase() == 'SI') {
        alert('Te mostraremos la lista de productos');

        // invocando la funcion de crearString para mostrar la lista de productos
        alert(crearStringResultado(indumentarias));
        console.log(crearStringResultado(indumentarias));




    } else if (selection.toUpperCase() == 'NO') {
        alert('Gracias, vuelva pronto');
    }

    // Ciclo para agregar producto y cantidad al carrito

    while (selection.toLocaleUpperCase() != 'NO') {
        let producto = prompt('Agrega un producto a tu carrito');
        let precio = 0;

        if (producto == 'pantalon' || producto == 'remera' || producto == 'camisa') {
            switch (producto) {
                case 'pantalon':
                    precio = 5000;
                    break;
                case 'remera':
                    precio = 2500;
                    break;
                case 'camisa':
                    precio = 3000;
                    break;
                default:
                    break;
            }

            let unidades = parseInt(prompt('Cuantas unidades desea comprar?'));

            carrito.push({ producto, unidades, precio })
            console.log(carrito);


        } else
            alert('No tenemos ese producto')

        selection = prompt('Desea seguir comprando?');

        // Ciclo para cerar y mostrar el carrito en Consolga

        while (selection == 'no') {
            alert('Gracias por su compra. Por consola vera lo que compro.');
            carrito.forEach((carritoFinal) => {
                console.log(`Producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.unidades}, Precio Unitario: $${carritoFinal.precio}, Subtotal: $${carritoFinal.unidades * carritoFinal.precio}`);
            })
            break;
        }

    }

    const total = carrito.reduce((acc, el)=> acc + el.precio * el.unidades, 0);
    console.log(`La compra total suma: $${total}`);


    // La logica de programacion para ADMINISTRADOR

} else if (tipoUser.toLocaleUpperCase() == 'ADMINISTRADOR') {

    alert('Estas entrando en modo administrador');

    //Ingreso de ROPA nueva y sumarlos al array//
    let continuar = true;

    while (continuar) {

        let ingreso = prompt('Ingresa la indumentaria al sistema.\nSeparados por un guion ( - ).\nDescripcion,\nColor,\nTalle,\nUnidades\nPrecio.\nEscribe ( Salir ) para finalizar');

        if (ingreso.toUpperCase() == 'SALIR') {
            continuar = false;
            break;
        }

        const datos = ingreso.split('-');
        console.log(datos);

        const indumentaria = new Indumentaria(datos[0], datos[1], datos[2], datos[3], datos[4], datos[5]);

        indumentarias.push(indumentaria);
        indumentaria.asignarId(indumentarias);
        console.log(indumentarias);

    }
    //Fin de Ingreso de ROPA nueva y sumarlos al array//

    //Ordenar el array de acuerdo a lo que se elija//
    let criterio = prompt('Elegí el criterio con el que deseas mostrar tu STOCK:\n1 - Descripcion \n2 - Talle \n3 - Color \n4 - Menor precio');

    function ordenar(criterio, array) {
        let arrayOrdenado = array.slice(0);

        switch (criterio) {
            case '1':
                return arrayOrdenado.sort((a, b) => a.descripcion.localeCompare(b.descripcion));

            case '2':
                return arrayOrdenado.sort((a, b) => a.talle.localeCompare(b.talle));

            case '3':
                return arrayOrdenado.sort((a, b) => a.color.localeCompare(b.color));

            case '4':
                return arrayOrdenado.sort((a, b) => a.precio - b.precio);


            default:
                alert('No es un criterio válido, a contunuacion veras el STOCK');
                return arrayOrdenado;
        }

    }
    //Fin de ordenar el array de acuerdo a lo que se elija//


    alert(crearStringResultado(ordenar(criterio, indumentarias)));

    console.log((crearStringResultado(ordenar(criterio, indumentarias))));









} else alert('Adios');



