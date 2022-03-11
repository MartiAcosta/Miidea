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
    { tipo: "celular", modelo: "A22", precio: 40000 },
    { tipo: "celular", modelo: "Iphone 13", precio: 350000 },
    { tipo: "notebook", modelo: "Macbook Pro", precio: 400000 },
    { tipo: "notebook", modelo: "HP Notebook", precio: 90000 },
    { tipo: "televisor", modelo: "Samsung 50'", precio: 70000 },
    { tipo: "televisor", modelo: "Phillips 43'", precio: 35000 },
    { tipo: "consola", modelo: "PS5", precio: 200000 },
    ];


cons

