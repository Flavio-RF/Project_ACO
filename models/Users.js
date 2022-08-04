const { Schema, model } = require("mongoose");
const beautifyUnique = require("mongoose-beautiful-unique-validation")

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        username: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


userSchema = model("User", userSchema);

module.exports = User;