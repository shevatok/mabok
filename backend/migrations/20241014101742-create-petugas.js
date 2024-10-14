"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("petugas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nik_petugas: {
        type: Sequelize.STRING,
      },
      nama_petugas: {
        type: Sequelize.STRING,
      },
      no_telp: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("petugas");
  },
};
