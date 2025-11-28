module.exports = {
  eliminarProducto,
  eliminarProductoStock,
  eliminarReserva,
  eliminarSucursal
};

//para descontinuar un producto
function eliminarProducto({
  nombre = null,
} = {}) {

  const query = `
    DELETE FROM Producto
    WHERE Nombre = '${nombre ?? "Nombre"}'
  `;

  return DELETE(query);
}
//para eliminar los stocks despues de descontinuar
function eliminarProductoStock({
  nombre = null,
} = {}) {

  const query = `
    DELETE FROM ProductoStock
    WHERE NombreProducto = '${nombre ?? "NombreProducto"}'
  `;

  return DELETE(query);
}

function eliminarSucursal({
  nombre = null,
} = {}) {

  const query = `
    DELETE FROM Sucursal
    WHERE Nombre = '${nombre ?? "Nombre"}'
  `;
  return DELETE(query);
}

//debe retornar la cantidad a su correspondiente stock
function eliminarReserva({
  id = null,
} = {}) {

  const query = `
    DELETE FROM Reserva
    WHERE ID = '${id ?? "ID"}'
  `;
  return DELETE(query);
}