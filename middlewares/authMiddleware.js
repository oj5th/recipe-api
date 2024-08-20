const jwt = require('jsonwebtoken');
const config = require('../config/config');
const db = require('../models');

exports.authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = await db.User.findByPk(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};