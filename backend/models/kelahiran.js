"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kelahiran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kelahiran.init(
    {
      tanggal_laporan: DataTypes.STRING,
      tanggal_lahir: DataTypes.STRING,
      lokasi: DataTypes.STRING,
      peternak_id: DataTypes.INTEGER,
      hewan_id: DataTypes.INTEGER,
      petugas_id: DataTypes.INTEGER,
      kartu_ternak_induk: DataTypes.STRING,
      eartag_induk: DataTypes.STRING,
      spesies_induk: DataTypes.STRING,
      id_pejantan_straw: DataTypes.STRING,
      id_batch_straw: DataTypes.STRING,
      produsen_straw: DataTypes.STRING,
      spesies_pejantan: DataTypes.STRING,
      jumlah: DataTypes.STRING,
      kartu_ternak_anak: DataTypes.STRING,
      eartag_anak: DataTypes.STRING,
      id_hewan_anak: DataTypes.STRING,
      jenis_kelamin_anak: DataTypes.STRING,
      kategori: DataTypes.STRING,
      urutan_ib: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "kelahiran",
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return kelahiran;
};
