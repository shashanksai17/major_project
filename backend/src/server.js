import express from  "express";
import {ENV} from  "./lib/env.js";
import path from "path";

const app=express();


const _dirname=path.resolve();

app.get("/health",(req,res)=>{
    res.status(200).json({msg:"success from backend"});
})
app.get("/books",(req,res)=>{
    res.status(200).json({msg:"this is the end point "});
})


// make our app for deployment


if(ENV.NODE_URL==="production"){
    app.use(express.static(path.join(_dirname,"../frontend/vite-project/dist")));
    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(_dirname,"../frontend/vite-project","dist","index.html"));
    })
}


app.listen(ENV.PORT,()=>{
    console.log(`server is running on port ${ENV.PORT}`);
})

