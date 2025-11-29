module.exports = {
  ActualizarProducto,
  ActualizarProductoStock,
  ActualizarSucursal,
  ActualizarReserva
};

function ActualizarProductoStock({
  id = null,
  nombreItem = null,
  sucursal = null,
  cantidad = null,
} = {}) {

  const query = `
    UPDATE ProductoStock
    SET Cantidad = '${cantidad ?? "Cantidad"}'
    WHERE Sucursal = '${sucursal ?? "Sucursal"}'
    AND NombreItem = '${nombreItem ?? "NombreItem"}'
    AND ID = '${id ?? "ID"}';
  `;

  return UPDATE(query);
}
//solo para actualizar cantidades, si quiere otro producto se crea una nueva reserva
function ActualizarReserva({
  id = null,
  sucursal = null,
  stock = null,
} = {}) {

  const query = `
    UPDATE Reservas
    SET Cantidad = '${stock ?? "Cantidad"}',
    IDProductoStock = '${stock ?? "Cantidad"}',
    WHERE ID = '${id ?? "ID"}';
  `;

  return UPDATE(query);
}

function ActualizarProducto({
  nombre = null,
  precio = null,
} = {}) {

  const query = `
    UPDATE Producto
    SET Precio = '${precio ?? "Precio"}'
    WHERE Nombre = '${nombre ?? "Nombre"}';
  `;
  return UPDATE(query);
}

function ActualizarSucursal({
  nombre=null
} ={}){

  const query = `
    UPDATE Sucursal
    SET Nombre = '${nombre ?? "Nombre"}';
  `;
  return UPDATE(query);
}