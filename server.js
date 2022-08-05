require("dotenv").config()
const path = require("path")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
const nunjucks = require("nunjucks")
const routes = require("./routes/index")

require("./db")()


app.set("view engine", "njk")
nunjucks.configure("views", {
    autoescape: true,
    express: app,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(routes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})