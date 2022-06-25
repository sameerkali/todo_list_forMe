"use strict"

const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}))





var items = ["Buy food", "Cook food", "Eat food"];


app.get("/", (req, res) => {
    
    
    
    var today = new Date()

    const options = {weekday : "long", day : "numeric", month : "long"}

    let day = today.toLocaleDateString("en-US", options)
    let dayhin = today.toLocaleDateString("hi-IN", options)


    res.render('list', { kindOfDay: day, newListItems : items}); 
    // res.render('list', { kindOfDayHin: dayhin })  //ejs== <h1 style="color:rgb(51, 51, 119)"> <%= kindOfDayHin %> </h1>




})

app.post("/", (req, res) => {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/")
})





app.listen(3000)

