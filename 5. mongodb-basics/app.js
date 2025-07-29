const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://kaze:kaze2025@cluster0.lq6xkcj.mongodb.net/'
)
.then(() => console.log('database connected sucessfully'))
.catch((e) => console.log(e))


const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    isActive : Boolean,
    tags : [String],
    createdAt : {type: Date, default : Date.now}
})

//create user model
const User = mongoose.model('User', userSchema)

async function runQueryExamples(){
    try{
    
        //create a new document
        const newUser = await User.create({
        // const newUser = User({
            name : 'Updated User',
            email : 'updateduser@gmail.com',
            age : 33,
            isActive : true,
            tags : ['developer', 'designer', 'manager'],
        })
        // await newUser.save()

        console.log('Created new user', newUser)

        // const allUsers = await User.find({})
        // console.log(allUsers)

    //  const getUserOfActiveFalse = await User.find({isActive : true})
    //  console.log(getUserOfActiveFalse)

    //  const getKaizerUser = await User.findOne({name: 'Kaizer' })
    //  console.log(getKaizerUser)

    //  const getLastCreatedUserByUserId = await User.findById(newUser._id)
    //  console.log(getLastCreatedUserByUserId)

    //  const selectedField = await User.find().select('name email -_id')
    //  console.log(selectedField)
     
    //  const limitedUsers = await User.find().limit(5).skip(1)
    //  console.log(limitedUsers)

    //  const sortedUsers = await User.find().sort({age: 1})
    //  console.log(sortedUsers)

    //  const countDocuments = await User.countDocuments({isActive : true})
    //  console.log(countDocuments)

    //   const deletedUser = await User.findByIdAndDelete(newUser._id)
    //   console.log('deleted user ->', deletedUser)
     
     const updateUser = await User.findByIdAndUpdate(newUser._id, {
        $set : {age: 100}, $push: {tags : 'updated'}
     },{new: true})

     console.log('updated user', updateUser)

    }catch(e){
        console.log('Error ->', e)

    }finally{
        await mongoose.connection.close()
    }
}

runQueryExamples()
