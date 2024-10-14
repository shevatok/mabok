"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class petugas extends Model {
    static associate(models) {
      petugas.hasMany(models.peternak, { foreignKey: "petugas_id" });
    }
  }
  petugas.init(
    {
      nik_petugas: DataTypes.STRING,
      nama_petugas: DataTypes.STRING,
      no_telp: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "petugas",
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return petugas;
};
