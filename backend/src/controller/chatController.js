import {chatClient} from "../lib/stream.js";
export async function getStreamToken(req, res){
    try{

        //use clerkId for Stream not mongoID it should match the Id 
        const  token=chatClient.createToken(req.user.clerkId);
        res.status(200).json({
            token,
            userId:req.user.clerkId,
            userName:req.user.name,
            userImage:req.user.image,

        })

    }
    catch(err){
        res.status(500).json({msg:"Internal server error"});
    }
}