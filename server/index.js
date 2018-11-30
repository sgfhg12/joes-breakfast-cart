const express = require('express');
const app = express(); 
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');
const port = process.env.PORT || 3001; 

// set up morgan for logging middleware + bodyparser for parsing request bodies
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//serving static assets if there are any
app.use(express.static(path.join(__dirname, '../public')));


//start listening on port 3001
app.listen(port, () => {
    console.log(`${port}`)
});

//requiring api routes
app.use('/api', require('./api'));

db.sync({force:true}).catch(err => console.log(err));

module.exports = app;
