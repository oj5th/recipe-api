const express = require('express');
const db = require('./models');
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/recipes', recipeRoutes);

app.use(errorHandler);

db.sequelize.sync().then(() => {
  console.log('Database synced');
});

module.exports = app;