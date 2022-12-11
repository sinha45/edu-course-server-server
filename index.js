const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('edu course running!')
});

app.listen(port, () => {
    console.log('edu course running on port', port);
})