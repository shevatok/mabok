"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("hewan", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      kode_eartag_nasional: {
        type: Sequelize.STRING,
      },
      no_kartu_ternak: {
        type: Sequelize.STRING,
      },
      provinsi: {
        type: Sequelize.STRING,
      },
      kabupaten: {
        type: Sequelize.STRING,
      },
      kecamatan: {
        type: Sequelize.STRING,
      },
      desa: {
        type: Sequelize.STRING,
      },
      alamat: {
        type: Sequelize.STRING,
      },
      petugas_id: {
        type: Sequelize.INTEGER,
      },
      peternak_id: {
        type: Sequelize.INTEGER,
      },
      kandang_id: {
        type: Sequelize.INTEGER,
      },
      spesies: {
        type: Sequelize.STRING,
      },
      sex: {
        type: Sequelize.STRING,
      },
      umur: {
        type: Sequelize.STRING,
      },
      identifikasi_hewan: {
        type: Sequelize.STRING,
      },
      tanggal_terdaftar: {
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
    await queryInterface.dropTable("hewan");
  },
};
