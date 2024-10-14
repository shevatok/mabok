"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pkb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pkb.init(
    {
      tanggal_pkb: DataTypes.STRING,
      lokasi: DataTypes.STRING,
      peternak_id: DataTypes.INTEGER,
      hewan_id: DataTypes.INTEGER,
      petugas_id: DataTypes.INTEGER,
      spesies: DataTypes.STRING,
      kategori: DataTypes.STRING,
      jumlah: DataTypes.STRING,
      umur_kebuntingan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "pkb",
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return pkb;
};
