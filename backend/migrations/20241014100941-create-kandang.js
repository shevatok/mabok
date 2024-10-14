"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("kandang", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_kandang: {
        type: Sequelize.STRING,
      },
      peternak_id: {
        type: Sequelize.INTEGER,
      },
      luas: {
        type: Sequelize.STRING,
      },
      kapasitas: {
        type: Sequelize.STRING,
      },
      nilai_bangunan: {
        type: Sequelize.STRING,
      },
      alamat: {
        type: Sequelize.STRING,
      },
      desa: {
        type: Sequelize.STRING,
      },
      kecamatan: {
        type: Sequelize.STRING,
      },
      kabupaten: {
        type: Sequelize.STRING,
      },
      provinsi: {
        type: Sequelize.STRING,
      },
      latitude: {
        type: Sequelize.STRING,
      },
      longitude: {
        type: Sequelize.STRING,
      },
      file_path: {
        type: Sequelize.STRING,
      },
      foto_type: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("kandang");
  },
};
