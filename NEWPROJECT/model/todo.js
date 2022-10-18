const mongoose = require('mongoose')

// for structure
const todoSchema = mongoose.Schema({
    Name: {
        type: String,
        require: true
    },

    DOB: {
        type: String,
        require: true
    },

    Gender: {
        type: String,
        require: true
    },

    Phone: {
        type: String,
        require: true
    },

    Email: {
        type: String,
        require: true,
        unique: true
        
    },

    Password: {
        type: String,
        require: true
    },

    
   
},
{
    timestamps: true
})





// create a folder in the database with the name 'todos' and store data with the schema
const model = mongoose.model('todos', todoSchema)
module.exports = model;