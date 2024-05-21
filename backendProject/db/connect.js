const mongoose = require('mongoose');

const uri = "mongodb+srv://dhruvrathod195:ns07pFA5dvkA0MMC@dhruvriddhiapi.kx3kkx7.mongodb.net/DhruvRiddhiAPI?retryWrites=true&w=majority";
const connectDB = () => {
    console.log("db");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;



