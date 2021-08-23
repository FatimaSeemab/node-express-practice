const express = require('express');
const app = express();
// import multipart from "express-multipart";
// var methodOverride = require('method-override')
// const multer = require('multer')
// const path = require('path')
// var busboy = require('connect-busboy');
const multer = require('multer')
//creating connection
const uploads = multer({
    dest: './uploads/images',
})
// app.use(methodOverride('X-HTTP-Method-Override'))
// const fileUpload = require('express-fileupload');
// const abc = ((require('body-parser')).json());
// app.use(abc);
// const methodOverride = require('express-method-override');
// app.use(busboy());
// app.use(fileUpload());
// app.use(methodOverride());
// app.use(express.multipart());
// app.use(express.json());y
// const mp = multipart({
//     preserveExtensions: true,
//     destination: "./uploads",
// });
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
app.use("/posts", routes)

//Putting data
// app.use("/update/courses/:id", routes)

//Deleting Data
// app.use("/del/courses/:id", routes)
// app.use(express.static('public'))

// Getting for specific id
// app.use("/get/:id", routes)

//Getting all courses
// app.use("/getcourses", routes)
//Posting query
// app.use("/postquery", routes)
app.post("/posts", uploads.single('profile'), (req, res) => {
    console.log(req.file);
    res.send(req.file)
})

app.listen(3001)

