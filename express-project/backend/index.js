const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());
app.use(express.static('public'));

app.post('/resgister', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send(data);
});

app.get('/name', (req, res) => {
    
    const data = req.body;
    console.log(data);
    res.send(data);
});

app.listen(port, () => {
    console.log('listening', port);
});
