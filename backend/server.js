//call express
const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/api', (req, res) => {
    res.send("ky");
})

app.post('/api/user', (req, res) => {
    const result = req.body
    console.log(result);
    res.json({
        message: "I got user"
    });
})

app.listen(PORT, () => {
    console.log('server run on port:', PORT);
})
