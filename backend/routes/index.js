const router = require("express").Router();
const authRoutes = require("./auth-routes");
const userRoutes = require("./user-routes");
const petugasRoutes = require("./petugas-routes");
const peternakRoutes = require("./peternak-routes");

router.get("/", (req, res) => {
  res.send("API is running well!");
});

router.get("/api", (req, res) => {
  res.send("API is running well!");
});

router.use("/api", authRoutes);
router.use("/api", userRoutes);
router.use("/api", petugasRoutes);
router.use("/api", peternakRoutes);

module.exports = router;
