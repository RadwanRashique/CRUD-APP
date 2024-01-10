const UserModel = require('../Model/UserModel')
const userModel=require('../Model/UserModel')

const getUsers =async(req,res)=>{

    try{
        const User= await  userModel.find()
        
        res.status(200).json({data:User,message:"welcome to userList"})

    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Internal server error"})
    }


}

const createUser= async(req,res)=>{
    console.log(req.body)

    try{

      const {name,age,place,job,salary}=req.body
      const newUser= new userModel({name,age,place,job,salary})
        await newUser.save()
        res.status(201).json({message:"user created successfully "})

    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Internal server error"})
    }
}
const updateUser= async(req,res)=>{
    console.log("sojdf")
    try{
        console.log(req.params,"sdfsdfserweert3wr4")
        const userId= req.params.id
        const {name,age,place,job,salary}=req.body
        const updateUser= await userModel.findByIdAndUpdate({_id:userId},{$set:{name,age,place,job,salary}},{new:true})
      
        if(!updateUser){
            res.status(404).json({message:"User Not found"})
        }
        
      return  res.status(200).json({message:"user successfully updated"})
        

    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Internal server error"})
    }
   

}

const deleteUser= async (req,res)=>{
 
    try{
        console.log(req.params)
        const userId=req.params.id
        console.log(userId,"sigdfiuh")
    const DeleteUser= await UserModel.findByIdAndDelete({_id:userId})
    if(!DeleteUser){
        res.status(404).json({message:"user Not found"})
    }
    console.log("jksndf")
    return res.status(200).json({message:"successfully deleted user"})
  

    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Internal server error"})
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}

const getUpdateUser= async(req,res)=>{
    try{

        const id=req.params.id
        console.log(id)
        const data= await UserModel.find({_id:id})
       res.status(200).json({content:data})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Internal server error"})
    }
}

module.exports={
    createUser,
    getUsers,
    deleteUser,
    updateUser,
    getUpdateUser
    
}