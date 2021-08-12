const Joi = require('joi');
const express = require('express');
const router = express.Router();
const handler = require("../handlers/handler")
//Getting connection
router.get("/", handler.connection)
//Getting data
router.get("/getcourses", handler.getcourses)
//Posting data
router.post("/post", handler.postcourses)
//Putting data
router.put("/update/courses/:id", handler.putcourses)
//Deleting Data
router.delete("/del/courses/:id", handler.delcourses)
//Getting data from id
router.get("/get/:id", handler.getbyid)
//Getting data using query strings
router.post("/postquery", handler.postquerystrings)
module.exports = router;
