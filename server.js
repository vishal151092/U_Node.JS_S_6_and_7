const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const foodModel = require('./Food');

const app = express();
app.use(bodyParser.json())
console.log(__dirname);
console.log(__filename);

const DB = 'mongodb+srv://vishalsinghvns:mongodb@cluster0.lchr3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>{
    console.log("connection to DB made successfully");
}).catch((error)=>{
    console.log(error);
})

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.get('/user',(req,res)=>{
    res.send("User Page Here !!");
    const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Billi' });
kitty.save().then(() => console.log('meow'));

});

app.get('/about',(req,res)=>{
    res.send("<h1>Tells more about Website. </h1>");
});
const User = mongoose.model('User',{
    name: String,
    location: String
});

app.post('/saveUser', (req,res)=>{
    console.log(req.body);

    const user = new User(req.body);
    user.save().then(() => console.log(user));

    res.send("data saved successfully !");
})

app.get('/getUsers', (req, res)=>{
    User.find({location: "US"}).then((result)=>{
        console.log(result);
        res.send(result);
    })
    .catch((error)=>{
        console.log(error);
        res.status(500);
        res.send("Something went wrong");
    })
})

app.listen(3000, ()=>{
    console.log("Server up and running on port 3000");
})