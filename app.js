//external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
dotenv.config();
const app = express();

//internal imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/comon/errorhandler");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

//database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successfull!"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//set view engine
app.set("view engine", "ejs");
//set static folder
app.use(express.static(path.join(__dirname, "public")));
//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));
//routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);
//error handling

//404 handler call
app.use(notFoundHandler);
//default handler call
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
