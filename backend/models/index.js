const AWS = require('aws-sdk');

// Configure AWS SDK
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const Tables = {
  Client: 'SiteAwareMVP-Clients',
  Employee: 'SiteAwareMVP-Employees',
  Activity: 'SiteAwareMVP-Activities',
  Assignment: 'SiteAwareMVP-Assignments',
  TreatmentPlan: 'SiteAwareMVP-TreatmentPlans',
  Worker: 'SiteAwareMVP-Workers'
};

module.exports = {
  dynamoDB,
  Tables
};