"use strict";
// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

const exphbs = require("express-handlebars");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "waterhose", resave: true, saveUninitialized: true })
);

app.use(passport.initialize());
app.use(passport.session());

const selectedCharacter = [];

// socket io
let http = require("http").createServer(app);
let io = require("socket.io")(http);
io.on("connection", socket => {
  socket.on("chat message", msg => {
    console.log("message: " + msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.emit("some event", {
  somePropery: "some value",
  otherProperty: "other value"
});
io.on("connection", socket => {
  socket.on("chat message", msg => {
    io.emit("chat message", msg);
  });
});

// Requiring our routes
require("./routes/html-routes.js")(app, selectedCharacter);
require("./routes/api-routes.js")(app, selectedCharacter);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(
      `==> 🌎  Listening on port ${PORT}s. Visit http://localhost:${PORT}/ in your browser.`,
      PORT,
      PORT
    );
  });
});
