const express = require("express");
const {
  getBootCamp,
  getBootCamps,
  updateBootcamp,
  createBootcamp,
  deleteBootcamp,
} = require("../controller/bootcamp");

const router = express.Router();

router.route("/").get(getBootCamps).post(createBootcamp);

router
  .route("/:id")
  .put(updateBootcamp)
  .get(getBootCamp)
  .delete(deleteBootcamp);

module.exports = router;
