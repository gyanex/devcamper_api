const express = require("express");
const dotenv = require("dotenv");
var morgan = require("morgan");
const connectDB = require("./config/db");
const colors = require("colors");
//Load env vars
dotenv.config({ path: "./config/config.env" });

// connect to database
connectDB();

//Route Files
const bootcamps = require("./routes/bootcamp");
//middleware files

const app = express();

//body parser
app.use(express.json());

if (process.env.NODE_ENV === "development") app.use(morgan("common"));
//Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(
    `server running in ${process.env.NODE_ENV} mode on ${port}`.yellow.bold
  );
});

//handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
