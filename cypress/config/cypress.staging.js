require('dotenv').config();

module.exports = {
  baseUrl: process.env.BASE_URL_STAGING,
  video: false,
  watchForFileChanges: false,
  failOnStatusCode: false,
};