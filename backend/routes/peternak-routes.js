const router = require("express").Router();
const {
  addPeternak,
  getPeternaks,
  getPeternakById,
  editPeternak,
  deletePeternak,
} = require("../controller/PeternakController");

router.post("/peternak", addPeternak);
router.get("/peternak", getPeternaks);
router.get("/peternak", getPeternakById);
router.put("/peternak/:id_peternak", editPeternak);
router.delete("/peternak/:id", deletePeternak);

module.exports = router;
