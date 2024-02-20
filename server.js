const express = require("express");
const dotenv = require("dotenv");
//Route Files
const bootcamps = require("./routes/bootcamp");
//Load env vars
dotenv.config({ path: "./config/config.env" });
const app = express();

//Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on ${port}`);
});
