const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");
//crear el Servidor
const app = express();

//Conectar a la base de datos

conectarDB();

//Habilitar Cors
app.use(cors());

//Habilitar express.json
app.use(express.json({ extended: true }));

//Puerto de la app
const port = process.env.PORT || 4000;

//importar Rutas
app.use("/api/sensor", require("./routes/sensor"));

//Arrancar la app
app.listen(port, () => {
  console.log(`El Servidor esta funcionando en el puerto ${port}`);
});
