//import .env file
require('dotenv').config();
//call express
const express = require('express');
//import connecting database
const pool = require('./db');
//import bcrypt hash function
const bcrypt = require('bcrypt');
//import jwt token use for authentication
const jwt = require('jsonwebtoken');
//import cors for accecpt origin to API
const cors = require("cors");
//import cookie parser for read data in cookies
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3001;

//for read body
app.use(express.json());
//for read cookies
app.use(cookieParser());
//accecpt origin api
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173']
}));

//for test connect api with frontend
app.get('/api', (req, res) => {
    res.send("backend connect");
})

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
                    message: "register success",
                });
            })
        })
        // const salt = bcrypt.genSalt(12);
        // const hash = bcrypt.hash(userData.password, salt);
        // await pool.query(`insert into users( email, password ) values ( '${userData.email}' , '${hash}' )`);
        // await pool.query(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, hash]);
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
    //get email and password from req
    const { email, password } = req.body
    console.log(email, password);
    try{
        //query data from database
        const results = await pool.query(`select * from users where email = '${email}'`);
        const userData = results.rows[0]
        //check password
        const match = await bcrypt.compare(password, userData.password)
        if(!match){
            res.status(400).json({
                message: "login fail"
            })
            console.log('login fail');
            //stop to use this function
            return false
        }
        //secret for verify signature
        const secret = process.env.JWT_SECRET;
        //create jwt payload:{ email, role }, algorithm: HS512, expires in 1h
        //payload: only identity user. not sensitive data!!!
        const token = jwt.sign({ email, role: 'member' }, secret, { algorithm: "HS512", expiresIn: "1h" } );
        //crate cookie for store token
        res.cookie("token", token, {
            //cookie expires in 30k ms
            maxAge: 300000,
            secure: true,
            httpOnly: true,
            //host ไม่จำเป็นต้องเป็นตัวเดียวกัน
            sameSite: "none"
        })
        console.log('login success')
        res.json({
            message: "login success"
        })
    } catch(err) {
        console.log("err", err);
        res.status(401).json({
            message: 'login fail',
            err
        })
    }
    
});

//api for authorization
app.get('/api/user', async (req, res) => {
    const { email } = req.body
    const secret = process.env.JWT_SECRET
    try {
        //get token from cookies
        const authToken = req.cookies.token
        //const authHeader = req.headers['authorization'];
        // let authToken = '';
        // if (authHeader) {
        //     authToken = authHeader.split(' ')[1];
        // }
        const user = jwt.verify(authToken, secret);
        //user authorization pass
        //recheck
        const check = await pool.query(`select * from users where email = '${email}'`);
        if (!check.rows[0]) {
            throw { message: "user not found" }
        }
        const results = await pool.query(`select * from users where email = '${email}'`);
        const userData = results.rows[0]
        res.json({
            userData
        })
    } catch(err) {
        console.log("err", err);
        res.status(403).json({
            message: 'authentication fail',
            err
        })
    }
});

app.listen(PORT, () => {
    console.log('server run on port:', PORT);
});
