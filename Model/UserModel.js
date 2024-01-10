const mongoose=require('mongoose')

const userModel=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    age:{
   type:Number,
   required:true
    },
    job:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },

},{timestamps:true})

module.exports=mongoose.model('User',userModel)