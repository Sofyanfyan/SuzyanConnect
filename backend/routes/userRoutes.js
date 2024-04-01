const userRouter = require("express").Router();
const { registerUser, authUser } = require("../controllers/userController");

userRouter.route("/").post(registerUser);
userRouter.post("/login", authUser);

module.exports = userRouter;
