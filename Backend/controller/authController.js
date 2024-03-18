const authcontroller=require("express").Router()
const user=require("../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


//register
authcontroller.post("/register",async(req,res)=>{
    try{
        //existing user check
        const isExisting=await  user.findOne({email: req.body.email})
        if(isExisting){
            throw new Error("Already Email Registered")
        }
        const hashedpassword=await bcrypt.hash(req.body.password,10)
        const newUser=await user.create({...req.body,password:hashedpassword})
        const {password, ...others}=newUser._doc;
        const Token=jwt.sign({_id : newUser._id},process.env.JWT_SECRET,{expiresIn:'10h'})
        res.status(201).json({others,Token})
    }
    catch(err){
        return res.status(500).json(err.message)
    }
})


//Login
authcontroller.post("/login", async (req, res) => {
    try{
        const user1=await  user.findOne({ email: req.body.email })
        if (!user1) {
            throw new Error('Email or Password Invalid')
        }
        const comparepass=await bcrypt.compare(req.body.password,user1.password);
        if(!comparepass) {
            throw new Error ('Password Incorrect');
          }
          const token=jwt.sign({id:user1._id},process.env.JWT_SECRET,{expiresIn: '5h'});
          const { password , ...others}=user1._doc;
          res.status(200).json({token,others})
    }catch(err){
        return res.status(500).json(err.message)
    }
})



module.exports=authcontroller