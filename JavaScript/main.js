alert ("Bienvenido/a, a nuestro E-Commerce, estas son nuestras notebook: Hp y Acer");

class Producto {
    constructor (nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = parseFloat (precio); 
        this.cantidad = cantidad;
    }

    Total(){
        return this.precio * this.cantidad;
    }

}

var arrayProductos = [];
do{
    var comprobacion = prompt ("¿Que notebook desea comprar? Si no desea comprar ingrese Salir");
    if(comprobacion === "salir" || comprobacion ==="SALIR" || comprobacion === "Salir"){
        break;
    }else{
        nombreP = comprobacion;
        var precioP = prompt ("Ingrese el precio del producto");
        var cantidadP = prompt ("Ingrese la cantidad comprada del producto");
        arrayProductos.push(new Producto(nombreP, precioP, cantidadP));
    }
}
while (comprobacion === "salir" || comprobacion ==="SALIR" || comprobacion === "Salir")

console.log(arrayProductos);

for (var producto of arrayProductos) {
    console.log(producto.nombre);
    console.log(producto.cantidad);
    console.log(producto.precio);
    console.log(producto.Total())
} 

