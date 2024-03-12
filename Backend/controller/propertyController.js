const property=require("../models/property")
const propertycontroller=require("express").Router()
const verifytoken=require("../middlewares/verifyToken")
const { verify } = require("jsonwebtoken")

//get all
propertycontroller.get('/getall',async(req,res)=>{
    try{
        const properties=await property.find({})
        
        return res.status(200).json(properties)
    }
    catch(err)
    {
        return res.status(500).json(err.message)
    }
})
propertycontroller.get('/find/featured',async(req,res)=>{
   
   //get featured
   
    try{
        //used for replacing  a path in document with actual documents from other collections.
        const featuredproducts=await property.find({featured:true}).populate('currentowner','-password')
        return res.status(200).json(featuredproducts)
    }
    catch(err){
        return res.status(500).json(err.message)
    }
})




//get all from a specific type
propertycontroller.get('/find',async(req,res)=>{
    const type=req.query;
    console.log(type)
    try{
        if(type){
            const properties1=await  property.find(type).populate('currentowner','-password');
            return res.status(200).json(properties1);
        }
        else{
            return res.status(500).json({msg:"No such type"})
        }
    }
    catch(error){
        return res.status(500).json(error.message)
    }
    
})

//get counts of types->ex:{beach:2,village:5,mountain:12}
propertycontroller.get('/find/types',async (req,res)=> {
    try{
        const beachtype=await property.countDocuments({type:'Beach'})
        const mountaintype=await property.countDocuments({type:'Mountain'})
        const villagetype=await property.countDocuments({type:'Village'})
        return res.status(200).json({
            beach:beachtype,
            mountain:mountaintype,
            village:villagetype
        })
    }
    catch(e){
        return res.status(500).json(e).message
    }
});




//get individual property
propertycontroller.get("/find/:id", async (req, res) => {
    try{
        const userproperty=await property.findById(req.params.id).populate('currentowner',"-password")
        if(!userproperty){
            throw new Error ( "Property not found");
        }
        else{
            return res.status(200).json(userproperty)
        }

    }
    catch(err)
    {
        return res.status(500).json(err.message)
    }
})


//create an estate

propertycontroller.post('/create',verifytoken,async(req,res)=>{
    try{
        const newproperty=await property.create({...req.body,currentowner:req.user.id})
        res.status(201).json(newproperty);
    }
    catch(err){
        res.status(500).json(err.message)
    }
})

//update estate

propertycontroller.put("/update/:id",verifytoken,async(req,res)=>{
    try{
        const updateproperty=await property.findById(req.params.id)
        if(updateproperty.currentowner.toString()!==req.user.id.toString()){
            throw new Error("You are not authorized to perform this action.")
        }
        else{
            const updatedproperty=await property.findByIdAndUpdate(req.params.id,
                {$set:req.body},//replaces the value of the specified field
                {new:true})
                return res.status(200).json(updatedproperty)
        }
        
    }
    catch(err){
        return res.status(400).json("Update failed")
    }
})

//delete estate
propertycontroller.delete('/delete/:id',verifytoken, async (req, res) => {
  try {
    const deleteproperty=await property.findById(req.params.id)
    if(deleteproperty.currentowner.toString() !== req.user.id.toString()){
        throw new Error('you do not have permission')
    }
    else{
        await property.findOneAndDelete(req.params.id)
        return res.status(500).json({msg :"Property deleted successfully"});
    }
    }
  
  catch(err){
     return res.status(500).json(err.message)
  }
})



module.exports=propertycontroller;