const Joi = require('joi');
const dal = require("../data/data")
//creating connection
const connection = (req, res) => {
    res.send("Connection created");
}
//Get Courses
async function getcourses(req, res) {
    try {
        const courses = await dal.getdata();
        if (courses.length > 0) {
            res.send(courses);
        }
    }
    catch (error) { res.send(error); }
}

//Post courses
async function postcourses(req, res) {

    const schema = { name: Joi.string().min(1).required() };
    const result = Joi.validate(req.body.name, schema)
    console.log("post method is called")
    if (result.error) {
        res.status(400).send(result.error)
        return
    }
    try {
        let name = req.body.name;
        console.log(name)
        const course = await dal.postdata(name);
        res.send(course)
    }
    catch (error) {
        res.send(error)
    }
}
//Put Courses
async function putcourses(req, res) {
    let name = req.body.name;
    console.log("put is called")
    id = req.params.id
    try {
        const course = await dal.putdata(name, id)
        res.send(course)
    } catch (error) {
        res.send(error)
    }

}
//Del Courses
async function delcourses(req, res) {
    console.log("del is called")
    try {
        id = req.params.id
        const course = await dal.deldata(id);
        res.send(course)
    } catch (error) {
        res.send(error)
    }

}

//Post By Query Strings
async function postquerystrings(req, res) {
    let name = req.query.name;
    console.log(name)
    try {
        const course = await dal.postdata(name);
        res.send(course)
    } catch (error) {
        res.send(error)
    }

}
//Get By Params
async function getbyid(req, res) {
    id = req.params.id;
    try {
        const course = await dal.getdatabyId(id)
        res.send(course)
    } catch (error) {
        res.send(error)
    }

}
module.exports = {
    getcourses,
    postcourses,
    putcourses,
    delcourses,
    getbyid,
    postquerystrings,
    connection
};