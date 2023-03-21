
const zapatillas = [
    { imagen: "/imagenes/air-max-90-zapatillas-WHvkXZ.png" , codigo: 1, modelo: 'Nike Air', precio: 7599 },
    { imagen: "/imagenes/air-jordan-1-retro-high-og-zapatillas.png", codigo: 2, modelo: 'Nike Botitas', precio: 9959 },
    { imagen: "/imagenes/sneaker-2768733_640.png", codigo: 3, modelo: 'Atom Red', precio: 6999 },
    { imagen: '/imagenes/sneakers-g8093b2c87_640.png', codigo: 4, modelo: 'All Stars Green', precio: 5699 },
    { imagen: "/imagenes/sneakers-2768218_1280.png", codigo: 5, modelo: 'All Stars Violet', precio: 6599 },
    { imagen: "/imagenes/sneaker-2768733_640.png", codigo: 6, modelo: 'All Stars Red', precio: 5599 },
  ];
  
  let carrito = [];
  
  function calcularTotal() {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
  }
  
  let seguirComprando = true;
  while (seguirComprando) {
    const modelo = parseInt(prompt("Ingrese el código del modelo que desea comprar:"));
    const producto = zapatillas.find(p => p.codigo === modelo);
    if (!producto) {
      alert("Código de producto inválido");
      continue;
    }
    carrito.push(producto);
  
    const respuesta = prompt("¿Desea comprar otro producto? (s/n)").toLowerCase();
    seguirComprando = respuesta === "s";
  }
  
  const totalCompra = calcularTotal();
  alert(`Gracias por su compra. Total a pagar: $${totalCompra}`);
  
  