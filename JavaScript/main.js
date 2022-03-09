alert ("Bienvenido/a, a nuestro E-Commerce, estas son nuestras notebook: Hp y Acer");

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
} 

