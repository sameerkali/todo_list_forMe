"use strict"

const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.set('view engine', 'ejs');

// this line is unnessesery
app.get("/", function(req, res) {
    var today = new Date()
    var currentDay = today.getDay()
    var  day = "";
    switch (currentDay) {
        case 0:
            day = "sunday"
            break;

        case 1:
            day = "monday"
            break;

        case 2:
            day = "tuesday"
            break;

        case 3:
            day = "wednessday"
            break;

        case 4:
            day = "thursday"
            break;

        case 5:
            day = " friday"
            break;

        case 6:
            day = "saturday"
            break;

        default:
            break;
            console.log("error")
    }

    res.render('list', { whichDay: day })
})
app.listen(3000)