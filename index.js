const express = require('express');
const app = express();

app.get('/teste', (req, res) => {
    res.json({msg: 'hello world'});
})

app.listen(8080);