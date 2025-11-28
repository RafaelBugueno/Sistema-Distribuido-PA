const { Pool } = require("pg");

//pedir los datos al maxi
const pool = new Pool({
  user: "tu_usuario",
  host: "26.168.196.165", //ip de maxi
  database: "tu_base",
  password: "tu_password",
  port: 5432,
});

module.exports = {
  pool,
  INSERT,
  SELECT,
  DELETE,
  UPDATE
};

// INSERT
async function INSERT(query) {
  const client = await pool.connect();
  try {
    await client.query(query);
    return { status: "ok", message: "INSERT exitoso" };
  } catch (err) {
    console.error(err);
    return { status: "error", message: "Error" };
  } finally {
    client.release();
  }
}

// SELECT
async function SELECT(query) {
  const client = await pool.connect();
  try {
    const result = await client.query(query);
    return { status: "ok", data: result.rows };
  } catch (err) {
    console.error(err);
    return { status: "error", message: "Error" };
  } finally {
    client.release();
  }
}

// DELETE
async function DELETE(query) {
  const client = await pool.connect();
  try {
    await client.query(query);
    return { status: "ok", message: "DELETE exitoso" };
  } catch (err) {
    console.error(err);
    return { status: "error", message: "Error" };
  } finally {
    client.release();
  }
}

// UPDATE
async function UPDATE(query) {
  const client = await pool.connect();
  try {
    await client.query(query);
    return { status: "ok", message: "UPDATE exitoso" };
  } catch (err) {
    console.error(err);
    return { status: "error", message: "Error" };
  } finally {
    client.release();
  }
}

//CREATE
async function CREATE(query) {
  const client = await pool.connect();
  try {
    await client.query(query);
    return { status: "ok", message: "CREATE exitoso" };
  } catch (err) {
    console.error(err);
    return { status: "error", message: "Error" };
  } finally {
    client.release();
  }
}