const multer=require('multer');
const uploadcontroller=require('express').Router()


//destination->where the image will be saved(in which directory)
//what will be the name of the saved image

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.filename)
    }
    
})
const upload=multer({
    storage
})
//upload.single("image") is going to check in the req.body for the req.body.image
uploadcontroller.post('/image',upload.single('image'),async(req,res)=>{
    try{
        return res.status(200).send({message:"Image uploaded"});
    }
    catch(err){
        return res.status(500).json(err)
    }
})
module.exports=uploadcontroller;