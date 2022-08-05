const express = require("express")
const router = express.Router()
const showController = require("../controllers/showController")
const userController = require("../controllers/userController")


router.get("/", showController.showLogin)

router.get("/register", showController.showRegister)

router.get("/home", showController.showJobs)

router.post("/", userController.login)

router.post("/register", userController.register)

module.exports = router