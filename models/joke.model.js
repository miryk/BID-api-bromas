const mongoose = require("mongoose");

const JokeSchema =  new mongoose.Schema({
  setup : "string",
  punchline : "string",
  timestamp : true
})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports =  Joke;