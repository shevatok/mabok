"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pengobatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pengobatan.init(
    {
      tanggal_pengobatan: DataTypes.STRING,
      tanggal_kasus: DataTypes.STRING,
      petugas_id: DataTypes.INTEGER,
      nama_infrastruktur: DataTypes.STRING,
      lokasi: DataTypes.STRING,
      dosis: DataTypes.STRING,
      sindrom: DataTypes.STRING,
      diagnosa_banding: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "pengobatan",
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return pengobatan;
};
