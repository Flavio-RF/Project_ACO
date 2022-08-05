module.exports= {
    showRegister: async (req, res) => {
        res.render("register")
    },
    showLogin: async (req, res) => {
        res.render("login")
    },
}