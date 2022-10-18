
const express = require("express")
const path = require('path')
const router = express.Router()
const db = require('../configuration/configure')
const bcrypt = require('bcrypt');
router.use(express.json())
router.post('/',(request,response)=>{
      const {email,password} = request.body;
      const Emailcheck = `SELECT * FROM STUDENT WHERE email ="${email}"`;
      db.get(Emailcheck,async(err,data)=>{
            if(err){
                  console.log(err.message)
            }
            else if(data === undefined){
                  response.status(400).send('Invalid User')
            }
            else{
             const comparePwd = await bcrypt.compare(password,data.password)
              if (comparePwd === true){
                  response.send('Login successfully!')
              }
              else{
                  response.send('Invalid password')
              }
            }
      })
})



module.exports =  router