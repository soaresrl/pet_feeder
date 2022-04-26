"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
var PORT = 3001;
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(PORT, function () {
    console.log('server listening on port: 3001');
});
