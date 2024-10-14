const { petugas } = require("../models");

const createPetugas = async (req, res) => {
  try {
    const { nik_petugas, nama_petugas, no_telp, email } = req.body;

    const newPtg = await petugas.create({
      nik_petugas,
      nama_petugas,
      no_telp,
      email,
    });

    res.status(200).json(newPtg);
  } catch (error) {
    console.log(error);
  }
};

const getPetugasAll = async (req, res) => {
  try {
    const response = await petugas.findAll({
      order: [["id", "DESC"]],
    });

    res.status(200).json({
      content: response,
      statusCode: 200,
    });
  } catch (error) {
    console.log(error);
  }
};

const editPetugas = async (req, res) => {
  const { nik_petugas } = req.params;
  const { nama_petugas, no_telp, email } = req.body;

  await petugas.update(
    {
      nama_petugas,
      no_telp,
      email,
    },
    {
      where: {
        nik_petugas,
      },
    }
  );

  const ptg = await petugas.findOne({
    nik_petugas: nik_petugas,
  });

  res.status(200).json({
    statusCode: 200,
    content: ptg,
  });
};

const deletePetugas = async (req, res) => {
  try {
    const { nik_petugas } = req.params;

    await petugas.destroy({
      where: {
        nik_petugas,
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
  deletePetugas,
  editPetugas,
  createPetugas,
  getPetugasAll,
};
