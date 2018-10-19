const express = require("express");
const nunjucks = require("nunjucks");
const fileUpload = require('express-fileupload');
const app = express();
app.listen(9000);
app.use("/public", express.static("public"));
app.use(fileUpload());
nunjucks.configure("views", {
    autoescape: true,
    noCache: true,
    express: app,
});

app.get("/hwIndex.html", function (reg, res) {
    return res.render('hwIndex.html', {
    });
});
app.get("/hwIndex2.html", function (reg, res) {
    return res.render('hwIndex2.html', {
    });
});
app.get("/hwIndex3.html", function (reg, res) {
    return res.render('hwIndex3.html', {
    });
});


app.get("/windowListener.js", function (reg, res) {
    return res.render('windowListener.js', {
    });
});
app.get("/menuBlock.js", function (reg, res) {
    return res.render('menuBlock.js', {
    });
});