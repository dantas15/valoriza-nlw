import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUserController";
import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedComplimentsController";
import { ListUserSentComplimentsController } from "./controllers/ListUserSentComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSentCompliments = new ListUserSentComplimentsController();
const listUserReceivedCompliments = new ListUserReceivedComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/users", createUserController.handle);

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

router.post("/login", authenticateUserController.handle);

router.post(
  "/compliment",
  ensureAuthenticated,
  createComplimentController.handle
);

router.get(
  "/users/compliments/sent",
  ensureAuthenticated,
  listUserSentCompliments.handle
);

router.get(
  "/users/compliments/received",
  ensureAuthenticated,
  listUserReceivedCompliments.handle
);

router.get("/tags", ensureAuthenticated, listTagsController.handle);

router.get("/users", ensureAuthenticated, listUsersController.handle);

export { router };
