"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class vaksin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vaksin.init(
    {
      tanggal_ib: DataTypes.STRING,
      lokasi: DataTypes.STRING,
      peternak_id: DataTypes.INTEGER,
      hewan_id: DataTypes.INTEGER,
      petugas_id: DataTypes.INTEGER,
      ib1: DataTypes.STRING,
      ib2: DataTypes.STRING,
      ib3: DataTypes.STRING,
      ib_lain: DataTypes.STRING,
      id_pejantan: DataTypes.STRING,
      id_pembuatan: DataTypes.STRING,
      bangsa_pejantan: DataTypes.STRING,
      produsen: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "vaksin",
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return vaksin;
};
