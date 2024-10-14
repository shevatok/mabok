const { user, petugas, peternak } = require("../models");

const addPeternak = async (req, res) => {
  try {
    const { id_peternak, nik_peternak, nama_peternak, lokasi, petugas_id } =
      req.body;

    const newPeternak = await peternak.create({
      nama_peternak,
      nik_peternak,
      id_peternak,
      petugas_id,
      lokasi,
      tanggal_pendaftaran: new Date(),
    });

    res.status(200).json({
      statusCode: 200,
      content: newPeternak,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPeternaks = async (req, res) => {
  try {
    const ptrs = await peternak.findAll({
      order: [["id", "DESC"]],
      include: [{ model: petugas }],
    });

    res.status(200).json({
      statusCode: 200,
      content: ptrs,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPeternakById = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const editPeternak = async (req, res) => {
  try {
    const { id_peternak } = req.params;
    const { nik_peternak, nama_peternak, lokasi, petugas_id } = req.body;

    await peternak.update(
      {
        nik_peternak,
        nama_peternak,
        lokasi,
        petugas_id,
        tanggal_pendaftaran: new Date(),
      },
      {
        where: {
          id_peternak,
        },
      }
    );

    await user.update({
      name: "",
      username: "",
      email: "",
      created_at: new Date(),
    });

    res.status(200).json({
      statusCode: 200,
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePeternak = async (req, res) => {
  try {
    const { id } = req.params;

    await peternak.destroy({
      where: {
        id,
      },
    });

    res.status(200).json({
      statusCode: 200,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addPeternak,
  getPeternaks,
  getPeternakById,
  editPeternak,
  deletePeternak,
};
