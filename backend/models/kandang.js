"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kandang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kandang.init(
    {
      id_kandang: DataTypes.STRING,
      peternak_id: DataTypes.INTEGER,
      luas: DataTypes.STRING,
      kapasitas: DataTypes.STRING,
      nilai_bangunan: DataTypes.STRING,
      alamat: DataTypes.STRING,
      desa: DataTypes.STRING,
      kecamatan: DataTypes.STRING,
      kabupaten: DataTypes.STRING,
      provinsi: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      file_path: DataTypes.STRING,
      foto_type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "kandang",
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return kandang;
};
