const mongoose=require("mongoose")
const PropertySchema=mongoose.Schema({
    currentowner:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String,
        required:true,
        min:6
    },
    type:{
        type:String,
        enum:[ "Beach","Mountain","Village"],
        required:true
    },
    desc:{
        type:String,
        required:true,
        min:20
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required: true
    },
    sqrmeters:{
        type:Number,
        required:true
    },
    continent:{
        type:String,
        required:true
    },
    beds:{
        type:Number,
        required:true,
        min:2
    },
    featured:{
        type:Boolean,
        default:false
    }

},
{
    timestamps: true  
}
)
module.exports=mongoose.model("Property",PropertySchema);