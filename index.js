var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())

let port = process.env.PORT || 3000;

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

app.get('/', function (req, res) {
    let level;
    let co2Value = getRandomArbitrary(400, 3500);
    if (co2Value <= 1000) {
        level = 'green';
    } else if (co2Value > 1000 && co2Value <= 2000) {
        level = 'yellow'
    } else if (co2Value > 2000) {
        level = 'red';
    }
    let obj = {
        'co2Value': co2Value,
        'level': level
    }

    console.log(obj);
    res.json(obj);
});

app.listen(port, ()=> {
    console.log(`app running on port ${port}`);
});