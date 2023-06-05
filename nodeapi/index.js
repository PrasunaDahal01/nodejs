import express from "express";
import bodyParser from "body-parser"; //It allow us to take incoming post request bodies
import usersRoutes from "./routes/users.js";
const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //we are going to json data in our whole applications. json stands for javascript object notation. It is a common format for sending and requesting data through rest API.
app.use("/users", usersRoutes);

//all routes in here are starting with /users
app.get("/", (req, res) => {
  //route , get request to homepage
  res.send("Hello from homepage.");
});

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
