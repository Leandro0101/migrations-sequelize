const express = require("express");
const routes = express.Router();
const UserController =  require("./controllers/UserController");
const AddressController =  require("./controllers/AddressController");
const TechController =  require("./controllers/TechController");

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);

routes.post("/users/:user_id/addresses", AddressController.store);
routes.get("/users/:user_id/addresses", AddressController.index);

routes.post("/users/:user_id/techs", TechController.store);
routes.get("/users/:user_id/techs", TechController.index);

module.exports = routes;