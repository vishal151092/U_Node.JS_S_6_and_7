const mongoose = require('mongoose')
const validator = require('validator')

const DB = 'mongodb+srv://<userid>:<password>@cluster0.lchr3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>{
    console.log("connection to DB made successfully");

    me.save().then(() => {
        console.log(me)
    }).catch((error) => {
        console.log('Error!', error)
    })


}).catch((error)=>{
    console.log(error);
})



const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }

           
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    }
})

const me = new User({
    name: '   Biswa  ',
    email: 'MYEMAIL@MEAD.IO   '
})

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const task = new Task({
//     description: 'Learn the Mongoose library',
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })
