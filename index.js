const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8080
const db = require('./configuration/configure')
const login = require('./Routes/login') //import login file from routes folder
const Register = require('./Routes/register') // import register file from routes folder
app.use(express.json())
app.use('/login',login);
app.use('/register',Register)


/// creation of students tables
// create_table = `CREATE TABLE STUDENT(student_id INTEGER PRIMARY KEY,first_name TEXT NOT NULL,password TEXT NOT NULL UNIQUE,
//                  last_name TEXT NOT NULL,email VARCHAR(254) NOT NULL UNIQUE,phone_number TEXT NOT NULL UNIQUE)`
// db.run(create_table,(err) =>{
//     if(err){
//         console.log(err.message)
//     }
//     else{
//         console.log("creation of student table successfully")
//     }
// })
// listing the tables in database
// db.all(`select name from sqlite_master where type = "table"`,(error,table)=>{
//     if(error){
//         console.log(error.message)
//     }
//     else{
//         console.log(table)
//     }
// })
/// SELECTING THE DATA OF STUDENT TABLE

db.all(`select * from STUDENT`,(error,data)=>{
    if(error){
        console.log(error.message)
    }
    else{
        console.log(data)
    }
})

// db.all(`DELETE FROM STUDENT`)
app.listen(PORT,() => console.log(`port is running at ${PORT}`))