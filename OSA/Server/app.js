var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var cookieSession = require("cookie-session");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");

var OSANARouter = require("./routes/OSANA");
var usersRouter = require("./routes/users");

const postgres = require("./database/postgres");

//var app = express();

const app = express();
app.use(helmet());
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: ["keyboard cat"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(bodyParser.raw({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "..", "dist", "browser")));
app.use(
  "/",
  express.static(path.join(__dirname, "..", "dist", "browser", "index.html"))
);

// app.use(
//   "/assets",
//   express.static(path.join(__dirname, "..", "dist", "browser", "assets"))
// );

app.use("/upload", express.static(path.join(__dirname, "..", "uploads")));

app.use("/api/OSANA", OSANARouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Postgres
postgres().then((pg) => {
  global.pg_client = pg;
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
