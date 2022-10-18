const express = require("express")
const router = express.Router()
const db = require('../configuration/configure')
const bcrypt = require('bcrypt');

router.use(express.json())
const emailCheck = (request,response,next) =>{
   const {email} = request.body
   getEmail = `select email from STUDENT WHERE email = "${email}"`
   db.get(getEmail,(error,row)=>{
    if(error){
        console.log(error.message)
    }
    else if(row === undefined){
        next()
    }
    else if(row.email === email){
        response.send({emailError:"email already registered"})
    }
   })
  
}
router.post('/',emailCheck,async(req,response) =>{
    const {firstName,password,lastName,email,phoneNo} = req.body
    const hashedPwd = await bcrypt.hash(password,10)
    const  insertData  = `INSERT INTO STUDENT(first_name,password,last_name,email,phone_number) VALUES("${firstName}","${hashedPwd}","${lastName}","${email}","${phoneNo}")`
    db.run(insertData,(error)=>{
        
        if(error){
            response.send({message:error.message})
            
        }
        else{
            response.send("User Register successfully")
        }

    })
    
})
module.exports =  router