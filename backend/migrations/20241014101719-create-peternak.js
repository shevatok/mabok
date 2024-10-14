"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("peternak", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_peternak: {
        type: Sequelize.STRING,
      },
      nik_peternak: {
        type: Sequelize.STRING,
      },
      nama_peternak: {
        type: Sequelize.STRING,
      },
      id_isikhnas: {
        type: Sequelize.STRING,
      },
      lokasi: {
        type: Sequelize.STRING,
      },
      petugas_id: {
        type: Sequelize.INTEGER,
      },
      tanggal_pendaftaran: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("peternak");
  },
};
