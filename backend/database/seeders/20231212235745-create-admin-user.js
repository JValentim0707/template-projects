'use strict';

var CryptoJS = require("crypto-js");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const passwordCrypto = CryptoJS.AES.encrypt('User Password', 'admin12345').toString()

    await queryInterface.bulkInsert('users', [
      {
        id: 'a9d4accb-d3d4-4dcf-8141-1b4dcad732f2',
        name: 'User Admin',
        email: 'admin@mystock.com',
        password: passwordCrypto,
        role: 'admin',
        role_description: 'Dono da Empresa',
        status: true,
        user_image: null,
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, { where: {id : 'a9d4accb-d3d4-4dcf-8141-1b4dcad732f2'}});
  }
};
