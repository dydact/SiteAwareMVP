const AWS = require('aws-sdk');

// Configure AWS SDK
AWS.config.update({
  region: process.env.AWS_REGION
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const env = process.env.ENVIRONMENT || 'dev';

const Tables = {
  Client: `SiteAwareMVP-Clients-${env}`,
  Employee: `SiteAwareMVP-Employees-${env}`,
  Activity: `SiteAwareMVP-Activities-${env}`,
  Assignment: `SiteAwareMVP-Assignments-${env}`,
  TreatmentPlan: `SiteAwareMVP-TreatmentPlans-${env}`,
  Worker: `SiteAwareMVP-Workers-${env}`
};

module.exports = {
  dynamoDB,
  Tables
};