const Joke = require("../models/joke.model");

module.exports.findAllJoke = async (req, res) => {
  try {
    const result = Joke.find()
    res.json(result)
  } catch (error) {
    console.log(err);
    res.json({message: "Something went wrong", error: err})
  }
}