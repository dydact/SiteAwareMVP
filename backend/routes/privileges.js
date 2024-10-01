const express = require('express');
const router = express.Router();
const { dynamoDB, Tables } = require('../models');
const checkPrivilege = require('../middleware/checkPrivilege');

// Get privileges for an organization
router.get('/:organizationId', checkPrivilege('privileges', 'read'), async (req, res) => {
  try {
    const params = {
      TableName: Tables.Employee,
      FilterExpression: 'organizationId = :orgId',
      ExpressionAttributeValues: {
        ':orgId': req.params.organizationId
      }
    };

    const result = await dynamoDB.scan(params).promise();
    const privileges = result.Items.map(item => ({
      userId: item.id,
      role: item.role,
      privileges: item.privileges
    }));

    res.json(privileges);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching privileges', error });
  }
});

// Update a privilege
router.put('/:organizationId', checkPrivilege('privileges', 'update'), async (req, res) => {
  const { userId, resource, action, allowed } = req.body;
  try {
    const params = {
      TableName: Tables.Employee,
      Key: { id: userId },
      UpdateExpression: 'SET privileges.#resource.#action = :allowed',
      ExpressionAttributeNames: {
        '#resource': resource,
        '#action': action
      },
      ExpressionAttributeValues: {
        ':allowed': allowed
      },
      ReturnValues: 'ALL_NEW'
    };

    const result = await dynamoDB.update(params).promise();
    res.json(result.Attributes);
  } catch (error) {
    res.status(500).json({ message: 'Error updating privilege', error });
  }
});

module.exports = router;