module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite3',
  },
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
};