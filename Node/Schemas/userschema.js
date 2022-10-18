const mongoose = required('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    phoneNumber: {
       type: string,
        required: true,
    },

    email: {
        type: string,
        required: true,
    },
    
    password: {
        type: string,
        required: true,
    }

})

const userModel = mongoose.model('Users', userSchema) ;
module.exports = userModel;