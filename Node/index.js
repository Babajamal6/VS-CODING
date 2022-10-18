// const http= require ('http');
// const hostname = '127.0.0.1';
// const port = 5000;

// const server = http.createServer((req, res) => {
// res.statusCode = 200;
// res.setHeader ('Content-Type' , 'text/plain');
// res.end('Welcome to my node strong-room server');
//  });

// server.listen(port, hostname, () => {
//     console.log('Server running at http://${hostname}:${port}/')
// });

const express =require('express')
 
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://Babajamal6:Babajamal1597@cluster0.v6zvcis.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log('Database Connected Successfully');
}).catch((err)=>{
    console.log(err)
})
port = 8000;

app.get('/', (req,res) => {
    res.send('Welcome Baba Jamal')
    console.log('Still listen to me')
})

app.listen(8000, () =>{
    console.log('Come Home')}
    )