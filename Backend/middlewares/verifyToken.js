const jwt=require("jsonwebtoken")
const verifyToken=(req,res,next)=>{
    if(!req.headers.authorization){
        throw new Error("No token provided");
    }
    if(req.headers.authorization &&req.headers.authorization.startsWith('Bearer')){
        const token=req.headers.authorization.split(' ')[1];
        jwt.verify(token,process.env.JWT_SECRET,(err,data)=>{
            if(err){
                return res.status(403).json( {message:"Invalid Token"} );
            }else{
              req.user = data;
              console.log(data);
               next(); 
            }
        })
    }
}
module.exports=verifyToken;