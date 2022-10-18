const mongoose = require('mongoose');
const express = require('express');
const Todos = require('./model/todo');
const bcrypt = require('bcrypt');
const user = require('./model/todo')
const cors = require('cors')   


const app = express();
app.use(express.json());
app.use(express.urlencoded( { extended: false}));
app.use(express.static(__dirname));

// app .use(cors()) used to render security over the server..eg,
//   when you are using an online server(it enables the end-end encryption
app.use(cors());     

port = 5000

mongoose.connect('mongodb+srv://Babajamal6:Babajamal1597@goil.qu7upfb.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log('Database Connected Successfully');
}).catch((err)=>{
    console.log(err)
})


// app.get('/', (req,res) => {
//     res.send('Welcome Baba Jamal')
//     // console.log('Still listen to me')
// })

// sending/Posting a record to the database
app.post('/add', async (req, res) => {
     
    // generating a password in an encrypted form
    try{ 
        const salt = await bcrypt.genSalt();
        const Password = await bcrypt.hash(req.body.Password, salt);

        const {Name,  DOB, Phone, Email } = req.body;
        const todos = await Todos.create({
            Name,
            DOB,
            Phone,
            Email,
            Password,
        
        })
        if(todos){
            res.status(201).json({
                status: true,
                message: "Todo was created successfully",
                data: todos
        
            })
           
        
        }else{
            res.status(400).json({
                status: false,
                message: "Sorry something went wrong",
            })
        }   
    }catch(err){
        console.log(err)
    }
})

// New login route
app.post('/login', async(req, res) => {
    const Email = req.body.Email;
    const Password = req.body.Password;

    user.findOne({ Email }).then((user) => {
        // check if the email is invalid
        if(!user) return res.status(400).json({message: "Invalid Email"});


        // if email is valid then check for the password and using the
        // bcrypt.compare to check what the user typed and what we have in our Database
        bcrypt.compare(Password, user.Password, (err, data) =>{
            if(err) return err;

            // check for successful login or failed
            if(data){
                res.status(200).json({message: "Logged in Successfully"})

            }else{
                res.status(400).json({message: "Invalid Password"})
            }
        });
    });
    
});


// Getting a data from the database
app.get('/getallTodos', async(req,res) =>{
    const data = await Todos.find()
    res.send(data)
    
    if(data){
        res.status(200).json({
            status: true,
            message: "Sucess",
            data: data
        })
    }else{
        res.status(400).json({
        status: false,
        message: "Sorry something went wrong"
        })
    }
});


// Deleting Todo from the database

app.delete('/remove/:id', async(req,res) =>{
    const data = await Todos.findByIdAndDelete(req.params.id)

    if(data){
        res.status(200).json({
            status: true,
            message: "Todo has been deleted suceessfully"
        })
      }else{
            res.status(400).json({
                status: false,
                message: "Sorry unable to delete Todo"
            })
        }
    })

    // Editting todo information

    app.patch("/patch/:id", async (req, res) => {
        const {id} = req.params;
        const {Name,  DOB, Phone, Email, Password, } = req.body;

        const todo = await Todos.updateOne({
            Name: Name,
            DOB: DOB,
            Gender: Gender,
            Phone: Phone,
            Email:Email,
            Password: Password,

        }).where({_id: id });

        if(todo){
            res.status(200).json({
                status: true,
                message: "updated",
                data: todo
            })
        }else{
            res.status(400).json({
                status: false,
                message: "Sorry something went wrong"
            })
        }
    })

    // Editting todo information number(2)

    // app.patch("/patch/:id", async (req, res) => {
    //     const {id} = req.params;
    //     const {changes} = req.body;

    //     const todo = await Todos.updateOne(changes).where({_id: id });

    //     if(todo){
    //         res.status(200).json({
    //             status: true,
    //             message: "updated",
    //             data: todo
    //         })
    //     }else{
    //         res.status(400).json({
    //             status: false,
    //             message: "Sorry something went wrong"
    //         })
    //     }
    // })

    
// Putting a data into the dadabase for changes

app.put("/put/:id", async (req, res) => {
    const {id} = req.params;
    const {Name,  DOB, Phone, Email, Password,} = req.body;

    const todo = await Todos.updateOne({
        Name: Name,
        DOB: DOB,
        Gender: Gender,
        Phone: Phone,
        Email:Email,
        Password: Password,
    }).where({_id: id });

    if(todo){
        res.status(200).json({
            status: true,
            message: "updated",
            data: todo
        })
    }else{
        res.status(400).json({
            status: false,
            message: "Sorry something went wrong"
        })
    }
})


app.get("/form.html", (req, res) => {
    res.sendFile(__dirname + '/form.html')
});

app.listen(port, () =>{
    console.log('I am logged in')
})


