const { Schema, model } = require("mongoose");
const beautifyUnique = require("mongoose-beautiful-unique-validation")
const bcrypt = require("bcryptjs")

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        username: {
            type: String,
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

userSchema.pre("save", async function (next) {
    if (this.isModified("password") || this.isNew) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    return next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    const match = await bcrypt.compare(candidatePassword, this.password);
    return match;
};

userSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};


userSchema.plugin(beautifyUnique)

const User = model("User", userSchema);

module.exports = User;