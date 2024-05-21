const express = require("express");
const cors = require("cors");
const { comment } = require("postcss");
const app = express();

app.use(cors());
const port = process.env.PORT || 3014;
const Questions_routes = require("./Routes/Questions")
const connectDB = require("./db/connect");
const apiData = require("./data.json");

app.get("/",(req,res)=>{
    res.send("Hello i am alive");
});

app.use("/api/products",Questions_routes)

app.get("/service", (req,res)=>{
    res.send(apiData);
}); 

app.listen(port,() =>{
    console.log("I am live again heheh");
});

const start = async () => {
    try {
        await connectDB();
        app.listen (port,() =>{
           console.log(`${port} yes i am connected`) ;
        });
    } catch(error){
        console.log(error);
    }
};

start();