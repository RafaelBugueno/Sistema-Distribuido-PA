const express = require("express");
const pool = require("./db");

const selecionar = require("./Seleccionar");
const agregar = require("./Agregar");
const eliminar = require("./Eliminar");
const actualizar = require("./Actualizar");

const app = express();
const PORT = 3000;



app.use(express.json());

app.get("/prueba-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ hora: result.rows[0].now });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "No se pudo conectar a PostgreSQL" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

app.post("/login", (req, res) => {
  console.log(req.body); // { correo: "...", password: "..." }
});

//METODOS DE AGREGAR
app.post("/api/agregar_producto", (req, res) => {
  const { Nombre, Precio } = req.body;

  try {
    const resultado = agregar.agregarProducto(
      Nombre,
      Precio
    );

    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar el producto" });
  }
});

app.post("/api/agregar_sucursal", (req, res) => {
  const { Nombre } = req.body;

  try {
    const resultado = agregar.agregarSucursal(
      Nombre
    );

    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar sucursal" });
  }
});

app.post("/api/agregar_producto_stock", (req, res) => {
  const { id,sucursal,stock,nombreProducto } = req.body;

  try {
    const resultado = agregar.agregarProductoStock(
      id,
      sucursal,
      stock,
      nombreProducto
    );

    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar productoStock" });
  }
});

app.post("/api/agregar_reserva", (req, res) => {
  const { id,idProductoStock,cantidad,sucursal,RUTCliente,fechaVencimiento } = req.body;

  try {
    const resultado = agregar.agregarSucursal(
      id,
      idProductoStock,
      cantidad,
      sucursal,
      RUTCliente,
      fechaVencimiento
    );

    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar reserva" });
  }
});

//METODOS DE SELECCIONAR
app.post("/api/stock_productos", (req, res) => {
  const { nombreProducto } = req.body;

  try {
    const resultado = selecionar.seleccionarProducto(
      nombreProducto
    );

    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar reserva" });
  }
});

app.post("/api/seleccionar_reserva", (req, res) => {
  const { RUTCliente } = req.body;

  try {
    const resultado = selecionar.agregarSucursal(
      RUTCliente
    );

    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar reserva" });
  }
});

app.post("/api/seleccionar_producto_stock", (req, res) => {
  const { id,idProductoStock,cantidad,sucursal,RUTCliente,fechaVencimiento } = req.body;

  try {
    const resultado = selecionar.agregarSucursal(
      id,
      idProductoStock,
      cantidad,
      sucursal,
      RUTCliente,
      fechaVencimiento
    );

    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar reserva" });
  }
});
//METODOS DE ACTUALIZAR