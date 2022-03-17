/*alert ("Bienvenido/a, a nuestro E-Commerce, estas son nuestras notebook: Hp y Acer");

class Producto {
    constructor (nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio; 
        this.cantidad = cantidad;
    }

    Total(){
        return this.precio * this.cantidad;
    }

}

var arrayProductos = [];
do{
    var compra = prompt ("¿Que notebook desea comprar? Si no desea comprar ingrese Salir");
    if(compra === "salir" || compra ==="SALIR" || compra === "Salir"){
        break;
    }else{
        nombreP = compra;
        var precioP = prompt ("Ingrese el precio del producto");
        var cantidadP = prompt ("Ingrese la cantidad comprada del producto");
        alert("Gracias por su compra")
        arrayProductos.push(new Producto(nombreP, precioP, cantidadP));
    }
}
while (compra === "salir" || compra ==="SALIR" || compra === "Salir")

console.log(arrayProductos);

for (var producto of arrayProductos) {
    console.log("La notebook elegida es:" + producto.nombre);
    console.log("La cantidad elegida es:" + producto.cantidad);
    console.log("El precio es:" +producto.precio);
    console.log("El precio total por cantidad es:" + producto.Total());
} */

const productos = [
    { tipo: "monitor", modelo: "ASUS", precio: 8250, img: "img/monitor1.png" },
    { tipo: "monitor", modelo: "ASUS", precio: 10150, img: "img/monitor2.png"},
    { tipo: "monitor", modelo: "ASUS", precio: 12980, img: "img/monitor3.png"},
    { tipo: "monitor", modelo: "ASUS", precio: 10000, img: "img/monitor4.png" },
    { tipo: "monitor", modelo: "ASUS", precio: 10150, img: "img/monitor5.png" },
    { tipo: "workstation", modelo: "ASUS", precio: 12980, img: "img/workstations1.png"},
    { tipo: "workstation", modelo: "ASUS", precio: 10000, img: "img/workstations2.png"},
    { tipo: "workstation", modelo: "ASUS", precio: 12980}, 
    { tipo: "proyector", modelo: "ASUS", precio: 20550},
    { tipo: "proyector", modelo: "ASUS", precio: 22300},
    { tipo: "tarjeta grafica", modelo: "msi'", precio: 51250 },
    { tipo: "tarjeta grafica", modelo: "msi", precio: 33150 },
    { tipo: "tarjeta grafica", modelo: "msi", precio: 33150 },
    { tipo: "tarjeta grafica", modelo: "msi", precio: 33150 },
    { tipo: "tarjeta madre", modelo: "asrock", precio: 8980 },
    { tipo: "tarjeta madre", modelo: "asrock", precio: 7250 },
    { tipo: "gabinete", modelo: "ASUS", precio: 8150},
    { tipo: "gabinete", modelo: "ASUS", precio: 5980},
    { tipo: "almacenamiento", modelo: "ASUS", precio: 5250},
    { tipo: "almacenamiento", modelo: "ASUS", precio: 8150},
    { tipo: "router", modelo: "tp-link", precio: 15250},
    { tipo: "router", modelo: "tp-link", precio: 11150},
    { tipo: "sistemawifi", modelo: "ASUS", precio: 9980},
    { tipo: "sistemawifi", modelo: "ASUS", precio: 1250},
    { tipo: "sistemawifi", modelo: "ASUS", precio: 3150},
    { tipo: "mouse", modelo: "ASUS", precio: 1250},
    { tipo: "mouse", modelo: "ASUS", precio: 1150},
    { tipo: "mouse", modelo: "ASUS", precio: 2980},
    { tipo: "mouse", modelo: "ASUS", precio: 3580},
    { tipo: "mouse", modelo: "ASUS", precio: 1900},
    { tipo: "mouse", modelo: "ASUS", precio: 2150},
    { tipo: "teclado", modelo: "Gx Genius", precio: 3980},
    { tipo: "teclado", modelo: "Gx Genius", precio: 5700},
    { tipo: "teclado", modelo: "Gx Genius", precio: 4250},
    { tipo: "teclado", modelo: "Gx Genius", precio: 3150},
    { tipo: "servidor", modelo: "ASUS", precio: 92980},
    { tipo: "servidor", modelo: "ASUS", precio: 92980},
    { tipo: "servidor", modelo: "ASUS", precio: 92980},
    { tipo: "servidor", modelo: "ASUS", precio: 92980},
    { tipo: "servidor", modelo: "ASUS", precio: 92980},
    ];
