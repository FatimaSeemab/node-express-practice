const express = require('express');
const app = express();
const multer = require('multer')
var busboy = require('connect-busboy');


const fileUpload = require('express-fileupload');
// const abc = ((require('body-parser')).json());
// app.use(abc);
app.use(busboy());
app.use(fileUpload()); 
// app.use(express.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});
const routes = require('./routes/courses');

//Getting connection
app.use("/", routes)
// //Posting data
app.use("/post", routes)

//Putting data
app.use("/update/courses/:id", routes)

//Deleting Data
app.use("/del/courses/:id", routes)
app.use(express.static('public'))

// Getting for specific id
app.use("/get/:id", routes)

//Getting all courses
app.use("/getcourses", routes)
//Posting query
app.use("/postquery", routes)

app.listen(3001)

