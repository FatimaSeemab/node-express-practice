var mysql = require("mysql")
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "courses"
    })
db.connect()
function getdata() {
    return new Promise(function (resolve, reject) {
        let sql = "SELECT id,name FROM course";
        // let result;
        db.query(sql, function (err, courses) {
            if (err) return reject(err);
            else return resolve(courses);
        });
    });
}
function postdata(req) {
    return new Promise(function (resolve, reject) {
        console.log("post data is called")
        
        console.log("pic");
        console.log(req.body.title, req.body.desc, req.body.headline, req.body.pic, req.body.Files)
        let sql = `insert into data(title,Description,headline,image,tags,files) values('${req.body.title}', '${req.body.desc}', '${req.body.headline}','${req.body.pic}','${req.body.Tags}','');`;
        db.query(sql, function (err, courses) {
            if (err) return reject(err);
            else return resolve(courses);
        });
    });
}

function putdata(name, id) {
    return new Promise(function (resolve, reject) {
        console.log("put data is called")
        sql = `update course set name="${name}" where id=${id}`;
        db.query(sql, function (err, courses) {
            if (err) return reject(err);
            else return resolve(courses);
        });
    });
}
function deldata(id) {
    return new Promise(function (resolve, reject) {
        console.log("del data is called")
        sql = `delete from course where id=${id}`;
        db.query(sql, function (err, courses) {
            if (err) return reject(err);
            else return resolve(courses);
        });
    });
}
function getdatabyId(id) {
    return new Promise(function (resolve, reject) {
        let sql = `SELECT id,name FROM course where id=${id}`;
        db.query(sql, function (err, courses) {
            if (err) return reject(err);
            else return resolve(courses);
        });
    });
}

module.exports = {
    postdata, putdata, deldata, getdata, getdatabyId
};