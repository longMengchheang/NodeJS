const mongoose = require('mongoose')

const connectToDB = async()=>{
    try{
        await mongoose.connect(
            'mongodb+srv://kaizer:kaizer2025@cluster0.c8d7dwc.mongodb.net/'
        )
        console.log('mongodb is connected sucessfully')

    }catch(error){
        console.error('Mongodb connection failed', error)
        process.exit(1)
    }
}

module.exports = connectToDB