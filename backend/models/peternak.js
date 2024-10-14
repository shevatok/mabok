"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class peternak extends Model {
    static associate(models) {
      peternak.belongsTo(models.petugas, { foreignKey: "petugas_id" });
    }
  }
  peternak.init(
    {
      id_peternak: DataTypes.INTEGER,
      nik_peternak: DataTypes.STRING,
      nama_peternak: DataTypes.STRING,
      id_isikhnas: DataTypes.STRING,
      lokasi: DataTypes.STRING,
      petugas_id: DataTypes.INTEGER,
      tanggal_pendaftaran: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "peternak",
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return peternak;
};
