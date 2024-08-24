const Sequelize = require("sequelize");
const config = require("../config/database.js");
const Endereco = require("../model/Endereco");

const connection = new Sequelize(config);

Endereco.init(connection);
Endereco.associate(connection.model);

module.exports = connection;
