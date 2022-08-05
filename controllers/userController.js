const mongoose = require("mongoose")
const User = require("../models/Users")
const jwt = require("jsonwebtoken")

module.exports = {
    register: async (req, res) => {
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;

        try {
            const newEmail = await User.findOne({ email })
            if (!newEmail) {
                let user = await User.create({
                    email,
                    username,
                    password,
                });

                let token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET)

                return res.status(201).render("home", {
                    token,
                    user: {
                        email: user.email,
                        username: user.username,
                        id: user._id,
                    },
                });
            } else {
                res.status(401).redirect("back", { error: "El email ya existe" })
            }

        } catch (error) {
            if (error instanceof mongoose.Error.ValidationError) {
                res.status(400).json(error)
            } else {
                res.status(500).json({
                    error: "Error inesperado en la base de datos.",
                })
                console.log(error)
            }
        };
    },
    login: async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        try {
            let user = await User.findOne({ email });
            if (!user) {
                res.status(401).json({ error: `No se encontro el email: ${email} o la contraseña es incorrecta.` })
                return
            }

            let match = await user.comparePassword(password);
            const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET)
            if (match) {
                res.status(200).redirect("/home", {
                    token,
                    user: {
                        email: user.email,
                        username: user.username,
                        id: user._id,
                    },
                });
            } else {
                res.status(401).redirect("back")
                req.flash("error", "Lo sentimos, el correo ya existe en el sistema.");

            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server error." });
        }
    },
}
