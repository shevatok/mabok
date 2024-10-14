"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hewan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hewan.init(
    {
      kode_eartag_nasional: DataTypes.STRING,
      no_kartu_ternak: DataTypes.STRING,
      provinsi: DataTypes.STRING,
      kabupaten: DataTypes.STRING,
      kecamatan: DataTypes.STRING,
      desa: DataTypes.STRING,
      alamat: DataTypes.STRING,
      petugas_id: DataTypes.INTEGER,
      peternak_id: DataTypes.INTEGER,
      kandang_id: DataTypes.INTEGER,
      spesies: DataTypes.STRING,
      sex: DataTypes.STRING,
      umur: DataTypes.STRING,
      identifikasi_hewan: DataTypes.STRING,
      tanggal_terdaftar: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      file_path: DataTypes.STRING,
      foto_type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "hewan",
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return hewan;
};
