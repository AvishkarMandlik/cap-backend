const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    
});

app.listen(3000, ()=>{
    console.log('Avi Bhau Zinda Bad')
});