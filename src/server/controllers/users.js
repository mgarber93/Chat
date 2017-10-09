const {User} = require('../../../db');

/**
 * @todo return metrics based on current active users etc 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getAll = (req, res) => {
  res.sendStatus(200);
};

/**
 * Create new user with req.body.
 *  
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const create = (req, res) => {
  User.createUser(req.body)
    .then(doc => res.status(200).json(doc))
    .catch(() => res.sendStatus(405));
};

/**
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getOne = (req, res) => {
  res.sendStatus(200);
};

/**
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const update = (req, res) => {
  res.sendStatus(200);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
};