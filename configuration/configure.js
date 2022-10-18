const sqlite3 = require('sqlite3')
const path = require('path')

const db = new sqlite3.Database(path.join(__dirname,"..","database","data.db"),err =>{
    if(err){
        console.log(err.message)
        
    }
    else{
        console.log("database connected successfully")
    }
})
module.exports = db