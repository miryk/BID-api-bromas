// import and use .env
const dotenv = require('dotenv').config();
const express = require('express');  // import express
const app = express(); // create instance called app
// const port = 8000; // assign a port to the server. Can go in .env

const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// conection to DB
require("./config/mongoose.config");

const jokeRoutes = require("./routes/jokes.routes");
jokeRoutes(app); // route module instance

app.listen(port , () => console.log(`Listening on port: ${port}`))

