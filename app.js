const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('index.html', {})
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})