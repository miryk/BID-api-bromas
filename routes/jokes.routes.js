const JokeController = require("../controllers/joke.controllers");

module.exports = (app) => {
  app.get("/api/test", JokeController.test);
  app.get("/api/jokes", JokeController.findAllJokes);
  app.post("/api/jokes/new", JokeController.postNewJoke);
  app.get("/api/jokes/random", JokeController.getRandomJoke);
  app.get("/api/jokes/:_id", JokeController.getJokeById);
  app.put("/api/jokes/update/:_id", JokeController.updateById);
  app.delete("/api/jokes/delete/:_id", JokeController.deleteById);
};
