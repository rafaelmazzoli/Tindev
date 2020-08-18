const express = require("express");
const DevController = require("./controllers/Dev");
const LikeController = require("./controllers/Like");
const DislikeController = require("./controllers/Dislike");

const routes = express.Router();

routes.post("/devs", DevController.store);
routes.get("/devs", DevController.index);
routes.post("/devs/:devId/dislikes", DislikeController.store);
routes.post("/devs/:devId/likes", LikeController.store);

module.exports = routes;
