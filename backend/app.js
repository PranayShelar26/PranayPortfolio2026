const express= require('express');
const app = express();
const port = 3000;
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');

const corsOptions = {
  origin: ['https://pranayportfolio-pkjc.onrender.com'], // Ensure no trailing slash
  methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
};

app.use(cors(corsOptions))
app.use(express.json()) 
mongoose.connect(process.env.Mongo_URI).then(()=>console.log("MongoAtlas connected"))
.catch((err)=>console.error(err));



const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const User = mongoose.model('users',UserSchema);

app.post('/contact',async (req,res)=>{
    const {username,email,message} = req.body;
    
    if(!username || !email || !message){
        return res.status(400).send("All Fields are required!!");
    }

    try{
        await User.create({username,email,message});
        res.status(200).send("Thank you");
    }catch(e){
        res.status(500).send(e.message);
    }
})


app.get('/',(req,res)=>{
    res.send("Hello world!!");
});

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})