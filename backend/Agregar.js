module.exports = {
  agregarReserva,
  agregarProducto,
  agregarProductoStock,
  agregarSucursal
};

function agregarReserva(id,idProductoStock, cantidad, sucursal, RutCliente,fechaVencimiento) {
  const query = `
    INSERT INTO Reservas (ID,IdProductoStock, Cantidad, Sucursal, RutCliente)
    VALUES ('${id}','${idProductoStock}', '${cantidad}', '${sucursal}', '${RutCliente}','${fechaVencimiento}');
  `;
  return INSERT(query);
}

function agregarProducto(nombre,precio) {
  const query = `
    INSERT INTO Producto (Nombre,Precio)
    VALUES ('${nombre}','${precio}');
  `;
  return INSERT(query);
}

function agregarProductoStock(id,sucursal,stock,nombreProducto) {
  const query = `
    INSERT INTO ProductoStock (ID,Sucursal,Stock,NombreProducto)
    VALUES ('${id}','${sucursal}','${stock}','${nombreProducto}');
  `;
  return INSERT(query);
}

function agregarSucursal(nombre) {
  const query = `
    INSERT INTO Sucursal (Nombre)
    VALUES ('${nombre}');
  `;
  return INSERT(query);
}