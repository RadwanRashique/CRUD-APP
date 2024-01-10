const mongoose=require('mongoose')

const dotenv=require('dotenv')
dotenv.config()


const MONGO=process.env.MONGO_URI



const DBconnect= async ()=>{
    try{
       
        await mongoose.connect(MONGO)
        
        console.log("Mongodb connected")
    }
    catch(error){
        console.log("error in db connection",error)
        process.exit(1)
    }
}

module.exports=DBconnect