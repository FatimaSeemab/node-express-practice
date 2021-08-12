const express = require('express');
const app = express();
const abc = ((require('body-parser')).json());
app.use(abc);
// app.use(express.json());
const routes = require('./routes/courses');

//Getting connection
app.use("/", routes)
// //Posting data
app.use("/post", routes)

//Putting data
app.use("/update/courses/:id", routes)

//Deleting Data
app.use("/del/courses/:id", routes)





// Getting for specific id
app.use("/get/:id", routes)

//Getting all courses
app.use("/getcourses", routes)
//Posting query
app.use("/postquery", routes)

app.listen(3000)

