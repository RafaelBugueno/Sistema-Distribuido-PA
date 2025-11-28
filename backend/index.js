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


app.post("/api/agregar_producto", (req, res) => {
  const { Nombre, Precio } = req.body;

  try {
    const resultado = agregar.agregarProducto(
      Nombre,
      Precio
    );

    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar el practicante" });
  }
});

//corregir atributos de sucursal
app.post("/api/agregar_sucursal", (req, res) => {
  const { Nombre, Precio } = req.body;

  try {
    const resultado = agregar.agregarProducto(
      Nombre,
      Precio
    );

    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar el practicante" });
  }
});