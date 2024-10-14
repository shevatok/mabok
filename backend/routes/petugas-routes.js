const router = require("express").Router();
const {
  createPetugas,
  getPetugasAll,
  editPetugas,
  deletePetugas,
} = require("../controller/PetugasController");

router.post("/petugas", createPetugas);
router.get("/petugas", getPetugasAll);
router.put("/petugas/:nik_petugas", editPetugas);
router.delete("/petugas/:nik_petugas", deletePetugas);

module.exports = router;
