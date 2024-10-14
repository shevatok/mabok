const { kandang } = require("../models");

const createKandang = async (req, res) => {
  try {
    const { nik_peternak, nama_peternak, lokasi, petugas_pendaftar } = req.body;

    const newKdg = await kandang.create({
      nik_peternak,
      nama_peternak,
      lokasi,
      petugas_pendaftar,
    });

    res.status(200).json({
      statusCode: 200,
      content: newKdg,
    });
  } catch (error) {
    console.log(error);
  }
};

const getKandangs = async (req, res) => {
  try {
    const kdg = await kandang.findAll({
      order: [["id", "DESC"]],
    });

    res.status(200).json({
      statusCode: 200,
      content: kdg,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateKandang = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const deleteKandang = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  createKandang,
  getKandangs,
  updateKandang,
  deleteKandang,
};
