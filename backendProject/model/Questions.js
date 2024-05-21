const mongoose = require("mongoose");
const QuestionSchema = new  mongoose.Schema({
    question:{
        type: String,
        required : true,
        },
        a: {
            type: String,
            required : true,
        },
        b: {
            type: String,
            required : true,
        },
        c: {
            type: String,
            required : true,
        },
        d: {
            type: String,
            required : true,
        },
        correct:{
            type: String,
            required : true,
        }
});

module.exports = mongoose.model('Question',QuestionSchema);
