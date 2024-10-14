'use strict';

const fs = require("fs")
const { encrypt } = require("../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const parsedData = JSON.parse(fs.readFileSync("./seeds/user-seeds.json"));

    const payloads = [];

    parsedData.map(values => {
      const { name, username, email, password, role  } = values;

      const encryptedPassword = encrypt(password)

      payloads.push({
        name,
        username,
        email,
        password: encryptedPassword,
        role: role,
        created_at: new Date()
      })
    })

    await queryInterface.bulkInsert("user", payloads, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", null, {})
  }
};
