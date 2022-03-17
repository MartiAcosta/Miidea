const productos = [
    { id:'0', tipo: "monitor", modelo: "ASUS", precio: 8250},
    { id:'1', tipo: "monitor", modelo: "ASUS", precio: 10150},
    { id:'2', tipo: "monitor", modelo: "ASUS", precio: 12980},
    { id:'3', tipo: "monitor", modelo: "ASUS", precio: 10000},
    { id:'4', tipo: "monitor", modelo: "ASUS", precio: 10150},
    { id:'5', tipo: "workstation", modelo: "ASUS", precio: 12980}, 
    { id:'6', tipo: "workstation", modelo: "ASUS", precio: 1000},
]

const contenedorTienda = document.getElementById('contenedorTienda');
const contenedorCarrito = document.getElementById('contenedorCarrito');
const carrito = []
for (const producto of productos) {


    const divProducto = document.createElement('div');
    const imgProducto = document.createElement('img');
    const nombreProducto = document.createElement('h2');
    const precioProducto = document.createElement('h3');
    const botonComprar = document.createElement('button');

    divProducto.className = 'card';
    imgProducto.className = 'card-img-top';
    nombreProducto.className = 'nombre-producto';
    precioProducto.className = 'card-precio';
    botonComprar.className = 'btn btn-primary';

    imgProducto.src = producto.img;
    nombreProducto.append(producto.modelo);
    precioProducto.append(`$${producto.precio}`);
    botonComprar.append('Agregar al carrito');
    botonComprar.id = `${producto.id}`;

    botonComprar.onclick = () => {
    const productoComprado = productos.find(producto => producto.id === botonComprar.id);
    carrito.push({ nombre: productoComprado.modelo, precio: productoComprado.precio })
    }

    divProducto.append(imgProducto, nombreProducto, precioProducto, botonComprar);
    contenedorTienda.append(divProducto);

}

const mostrarCarrito = () => {

    for (const producto of carrito) {
    const nombreProducto = `<h4>Producto : ${producto.nombre}</h4>`
    const precioProducto = `<h4>Precio : ${producto.precio}</h4>`
    contenedorCarrito.innerHTML += nombreProducto
    contenedorCarrito.innerHTML += precioProducto
    }

    const total = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0);
    contenedorCarrito.append(`Total Compra :  ${total}`)

}

let botonCarrito = document.getElementById("btnCarrito")
botonCarrito.onclick = mostrarCarrito;