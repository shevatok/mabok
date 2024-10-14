"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pengobatan", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_kasus: {
        type: Sequelize.STRING,
      },
      tanggal_pengobatan: {
        type: Sequelize.STRING,
      },
      tanggal_kasus: {
        type: Sequelize.STRING,
      },
      petugas_id: {
        type: Sequelize.INTEGER,
      },
      nama_infrastruktur: {
        type: Sequelize.STRING,
      },
      lokasi: {
        type: Sequelize.STRING,
      },
      dosis: {
        type: Sequelize.STRING,
      },
      sindrom: {
        type: Sequelize.STRING,
      },
      diagnosa_banding: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pengobatan");
  },
};
