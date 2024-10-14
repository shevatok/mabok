"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("inseminasi", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_inseminasi: {
        type: Sequelize.STRING,
      },
      tanggal_ib: {
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
      ib1: {
        type: Sequelize.STRING,
      },
      ib2: {
        type: Sequelize.STRING,
      },
      ib3: {
        type: Sequelize.STRING,
      },
      ib_lain: {
        type: Sequelize.STRING,
      },
      id_pejantan: {
        type: Sequelize.STRING,
      },
      id_pembuatan: {
        type: Sequelize.STRING,
      },
      bangsa_pejantan: {
        type: Sequelize.STRING,
      },
      produsen: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("inseminasi");
  },
};
