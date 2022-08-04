require("dotenv").config()
const path = require("path")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;

require("./db")()


app.use(express.json)
app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})