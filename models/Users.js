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
        jobs: [
            {
                ref: "Jobs",
                type: Schema.Types.ObjectId,
            },
        ],
    },
    {
        timestamps: true,
    }
);

userSchema.plugin(beautifyUnique)

userSchema = model("User", userSchema);

module.exports = User;