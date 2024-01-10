const express=require('express')
const router=express.Router()
const UserController=require('../controllers/userController')

router.post('/createUser',UserController.createUser)
router.get('/getUsers',UserController.getUsers)
router.delete('/deleteUser/:id',UserController.deleteUser)
router.put('/updateUser/:id',UserController.updateUser)
router.get('/getupdateUser/:id',UserController.getUpdateUser)

module.exports=router

