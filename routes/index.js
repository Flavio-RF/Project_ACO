const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const showController = require("../controllers/showController")

router.get("/", (req, res) => {
    res.render("index")
})

router.get("/login", showController.showLogin)

router.get("/register", showController.showRegister)

router.post("/login", userController.login)

router.post("/register", userController.register)



module.exports = router