// const express =require('express')

// const app = express();

// port = 8000;

// app.get('/', (req,res) => {
//     res.send('Welcome Baba Jamal Issaka')
//     console.log('Still listen to me')
// })

// app.listen(8000, () =>{
//     console.log('listen to me')
// });

const express =require('express')

const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://Babajamal6:Babajamal1597@cluster1.fpuides.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log('Database Connected Successfully');
}).catch((err)=>{
    console.log(err)
})
port = 8000;

app.get('/', (req,res) => {
    res.send('Welcome Baba Jamal Issaka')
    console.log('Still listen to me')
})

app.listen(8000, () =>{
    console.log('listen to me')
});

