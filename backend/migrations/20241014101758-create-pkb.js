"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pkb", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_kejadian: {
        type: Sequelize.STRING,
      },
      tanggal_pkb: {
        type: Sequelize.STRING,
      },
      lokasi: {
        type: Sequelize.STRING,
      },
      peternak_id: {
        type: Sequelize.INTEGER,
      },
      hewan_id: {
        type: Sequelize.INTEGER,
      },
      petugas_id: {
        type: Sequelize.INTEGER,
      },
      spesies: {
        type: Sequelize.STRING,
      },
      kategori: {
        type: Sequelize.STRING,
      },
      jumlah: {
        type: Sequelize.STRING,
      },
      umur_kebuntingan: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pkb");
  },
};
