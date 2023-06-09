require("dotenv").config();
const express = require("express");
//start express
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json()); //converting json object to java script object
app.use("/api/users", userRouter);
app.listen(process.env.APP_PORT, () => {
  console.log("Server running on PORT:", process.env.APP_PORT);
});
