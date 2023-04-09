const express = require("express");
const server = express();
const {login} = require('./login');
const utill = require('utill');

var username = 'hao123';
var password = '123hao';

const PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
    console.log("Server is running on port " + PORT);
    console.log(login('',''))
});
