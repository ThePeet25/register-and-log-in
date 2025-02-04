//call express
const express = require('express');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/api', (req, res) => {
    res.send("ky");
})

app.listen(PORT, () => {
    console.log('server run on port:', PORT);
})
