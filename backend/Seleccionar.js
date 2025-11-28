module.exports = {
  seleccionarProducto,
  seleccionarProductoStock,
  seleccionarReserva
};
function seleccionarProducto({
  nombre = null
} = {}) {

  const query = `
    SELECT * FROM Producto
    WHERE Nombre = '${nombre ?? "Nombre"}';
  `;
  return SELECT(query);
}

function seleccionarProductoStock({
  nombreProducto = null,
  sucursal = null,
  cantidad = null,
} = {}) {

  const query = `
    SELECT * FROM Inventario
    WHERE NombreItem = '${nombreItem ?? "NombreItem"}'
    AND Sucursal = '${sucursal ?? "Sucursal"}'
    AND Cantidad = '${cantidad ?? "Cantidad"}';
  `;
  return SELECT(query);
}

function seleccionarReserva({
  rutReserva = null,
} = {}) {

  const query = `
    SELECT * FROM Reserva
    WHERE RUT = '${rutReserva ?? "RUT"}';
  `;
  return SELECT(query);
}