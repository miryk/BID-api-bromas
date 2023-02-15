const Joke  = require("../models/joke.model");

module.exports.findAllJokes = async (req, res) => {
  try {
    const allJokes = await Joke.find();
    res.json(allJokes);
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
}

module.exports.postNewJoke = async (req, res) => {
  try {
    const {setup, punchline} = req.body;
    const jokes = await Joke.create({
      setup: setup,
      punchline: punchline
    });
    res.json(jokes);
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
}

module.exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findOne({_id: req.params._id})
    res.json(joke);
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
}

module.exports.getRandomJoke = async (req, res) => {
  try {
    const allJokes = await Joke.find();
    const randomJoke = allJokes[Math.floor(Math.random() * allJokes.length)];
    res.json(randomJoke);
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
}

module.exports.updateById = async (req, res) => {
  const {setup, punchline} = req.body;
  const id = req.params._id;
  try {
    const updated = await Joke.findOneAndUpdate({_id: id}, {$set: {setup: setup, punchline: punchline}}, { new: true })
    console.log(updated)
    res.json({updated: updated});
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
}

module.exports.deleteById = async (req, res) => {
  try {
    const deleted = await Joke.findOneAndDelete({_id: req.params._id}) 
    res.json({deleted: deleted});
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
}


module.exports.test = (req, res) => {
  res.json({
    message: "Hello Test"
  })
}
