//call express
const express = require('express');
//import connecting database
const pool = require('./db');
//import bcrypt hash function
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3001;

//for read body
app.use(express.json());

//api for register
app.post('/api/register', async (req, res) => {
    const { email, password } = req.body
    const userData = {
        email,
        password
    }
    try {
        //generate salt and use in hash funciton for hash password
        bcrypt.genSalt(12, function(err, salt) {
            bcrypt.hash(password, salt, async function(err, hash){
                await pool.query(`insert into users( email, password ) values ( '${userData.email}' , '${hash}' )`);
                res.json({
                    message: "insert success",
                    data: [
                        email,
                        hash
                    ]
                });
            })
        })
    } catch(err) {
        res.send("email is already exits");
        console.error(err);
    }
});

//create table users
app.get('/setup', async (req, res) => {
    try {
        const result = await pool.query(`create table if not exists users(
            id serial primary key,
            email varchar(255) UNIQUE,
            password varchar(255)
            );`);
        res.send(result);
    } catch(err) {
        console.error(err);
    }

})

//see all rows in users
app.get('/getall', async (req, res) => {
    try{
        const result = await pool.query('select * from users');
        res.json(result.rows);
    } catch(err) {
    console.error(err);
    }
})

//api for login 
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body
    console.log(email, password);
    try{
        const results = await pool.query(`select * from users where email = '${email}'`);
        const userData = results.rows[0]
        const match = await bcrypt.compare(password, userData.password)
        if(!match){
            res.status(400).json({
                message: "login fail"
            })
            console.log('login fail');
            //stop to use this function
            return false
        }
        console.log('login success')
        res.json(userData)
    } catch(err) {
        console.log("err", err);
        res.status(401).json({
            message: 'login fail',
            err
        })
    }
    
});

app.listen(PORT, () => {
    console.log('server run on port:', PORT);
});
