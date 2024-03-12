const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    profileimg:{
        type:String,
        default:""
    }
},
    {
        timestamps: true  //this will create createdAt and updatedAt as an object with date
    }
)
module.exports=mongoose.model("User",UserSchema);