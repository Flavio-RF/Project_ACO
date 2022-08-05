const { Schema, model } = require("mongoose");
const beautifyUnique = require("mongoose-beautiful-unique-validation");


const jobsSchema = new Schema(
    {
        author: {
            ref: "User",
            type: Schema.Types.ObjectId,
        },

        date: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        comments: [
            {
                type: String,
            },
        ],

        done: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

jobsSchema.plugin(beautifyUnique);

const Job = model("Job", jobsSchema);

module.exports = Job;