const Sequelize = require('sequelize');
const config = require('../config/config');
const sequelize = new Sequelize(config.development);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Recipe = require('./recipe')(sequelize, Sequelize);

db.User.hasMany(db.Recipe, { foreignKey: 'userId' });
db.Recipe.belongsTo(db.User, { foreignKey: 'userId' });

module.exports = db;