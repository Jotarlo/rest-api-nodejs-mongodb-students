/** importing packages */
const mongoose = require('mongoose');

/** Schema instance */
let Schema = mongoose.Schema;

/** Student Schema Definition */
let studentSchema = new Schema({
    code: {
        type: "String",
        unique: true,
        required: true
    },
    name: {
        type: "String",
        unique: false,
        required: true
    },
    lastname: {
        type: "String",
        unique: false,
        required: true
    },
    subjects: ['String']
},
{
    timestamps: true
});

module.exports = studentSchema;