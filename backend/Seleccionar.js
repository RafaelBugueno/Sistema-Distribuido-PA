module.exports = {
  seleccionarProducto,
  seleccionarProductoStock,
  seleccionarReserva
};

//VERSION ANTIGUA
/*
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
    WHERE NombreItem = '${nombreItem ?? "NombreProducto"}'
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
*/


async function seleccionarProducto({ nombre = null } = {}) {
  //selecciona todos
  let query = "SELECT * FROM Producto";
  let valores = [];

  //o con filtro si lo hay
  if (nombre !== null) {
    query += " WHERE Nombre = $1";
    valores.push(nombre);
  }

  const resultado = await db.query(query, valores);
  return resultado.rows;
}

async function seleccionarProductoStock({
  nombreProducto = null,
  sucursal = null,
  precioMin = null,
  precioMax = null
} = {}) {

  let condiciones = [];
  let valores = [];
  let index = 1;

  if (nombreProducto !== null) {
    condiciones.push(`NombreProducto = $${index}`);
    valores.push(nombreProducto);
    index++;
  }

  if (sucursal !== null) {
    condiciones.push(`Sucursal = $${index}`);
    valores.push(sucursal);
    index++;
  }
  
  if (precioMin !== null && precioMax !== null) {
    condiciones.push(`Precio BETWEEN $${index} AND $${index + 1}`);
    valores.push(precioMin, precioMax);
    index += 2;
  } else {
    if (precioMin !== null) {
      condiciones.push(`Precio >= $${index}`);
      valores.push(precioMin);
      index++;
    }

    if (precioMax !== null) {
      condiciones.push(`Precio <= $${index}`);
      valores.push(precioMax);
      index++;
    }
  }

  let query = "SELECT * FROM ProductoStock";

  if (condiciones.length > 0) {
    query += " WHERE " + condiciones.join(" AND ");
  }

  const resultado = await db.query(query, valores);
  return resultado.rows;
}

async function seleccionarReserva({ rutReserva = null } = {}) {
  let query = "SELECT * FROM Reserva";
  let valores = [];

  if (rutReserva !== null) {
    query += " WHERE RUT = $1";
    valores.push(rutReserva);
  }

  const resultado = await db.query(query, valores);
  return resultado.rows;
}

async function seleccionarStocksSucursal(nombreProducto) {
  const query = `
    SELECT 
        s.nombreSucursal,
        ps.stock
    FROM Sucursal s
    JOIN ProductoStock ps 
        ON ps.sucursal = s.nombreSucursal
    WHERE ps.nombreProducto = $1
      AND ps.stock > 0;
  `;
  const resultado = await db.query(query, [nombreProducto]);
  return resultado.rows;
}