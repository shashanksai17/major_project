import express from  "express";
import {ENV} from  "./lib/env.js";
import path from "path";
import {connectDB} from "./lib/db.js";
import cors from "cors";
import {serve} from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";

const app=express();


const __dirname=path.resolve();


app.use(express.json());
//
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));

app.use(".api/inngest",serve({client:inngest,functions}))


app.get("/health",(req,res)=>{
    res.status(200).json({msg:"success from backend"});
})
app.get("/books",(req,res)=>{
    res.status(200).json({msg:"this is the end point "});
})


// make our app for deployment


if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/vite-project/dist")));
    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/vite-project","dist","index.html"));
    })
}





const startServer=async()=>{
    try{
        await connectDB();
      app.listen(ENV.PORT,()=>{
    console.log(`server is running on port ${ENV.PORT}`);
        })

    }
    catch(err){
        console.log(err);
    }
}

startServer();