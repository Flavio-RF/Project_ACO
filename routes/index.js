const webRoutes = require("./web")
const adminROutes = require("./admin")


module.exports = (app) => {
    app.use(webRoutes)
    // app.use(adminRoutes)
}





