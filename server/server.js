const express = require("express")
const app = express();
const cors = require("cors");
require("dotenv").config({path:"./config.env"});
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// DB Driver connection
const dbo = require("./db/conn");

//use express static file
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get("*",(req,res)=>{
        res.sendDile(path.resolve(_dirname,'client','build','index.html'));
    })
}




app.listen(port,()=>{
    dbo.connectToServer(function(err){
        if(err) console.error(err);
    });
    console.log(`Server is running on port:${port}`);

});