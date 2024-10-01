const { dynamoDB, Tables } = require('../models');

const checkPrivilege = (resource, action) => async (req, res, next) => {
  try {
    const params = {
      TableName: Tables.Employee,
      Key: { id: req.user.id },
    };

    const result = await dynamoDB.get(params).promise();
    const user = result.Item;

    if (user && user.role && user.privileges && user.privileges[resource] && user.privileges[resource].includes(action)) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden: Insufficient privileges' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error checking privileges', error });
  }
};

module.exports = checkPrivilege;