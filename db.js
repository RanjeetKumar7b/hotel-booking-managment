const mongoose=require("mongoose");
var mongoURL='mongodb+srv://rk2505152:user123@cluster0.xvscmpg.mongodb.net/yor-stay'
mongoose.connect(mongoURL,{useUnifiedTopology:true , useNewUrlParser:true} );
var connection=mongoose.connection
connection.on('error',()=>{
          console.log("mongo db connection failed");
})
connection.on('connected',()=>{
          console.log("mongo db connection succesfully");
})
module.exports=mongoose;